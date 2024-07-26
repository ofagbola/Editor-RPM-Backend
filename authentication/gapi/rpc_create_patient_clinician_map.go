package gapi

import (
	"context"
	// "errors"
	"time"

	"github.com/hibiken/asynq"
	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"
	// "github.com/ofagbola/Editor-RPM-Backend/authentication/val"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/worker"
	// "google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	// "google.golang.org/protobuf/types/known/timestamppb"
)

func (server *Server) CreatePatientClinicianMapping(ctx context.Context, req *pb.CreatePatientClinicianMappingRequest) (*pb.CreatePatientClinicianMappingResponse, error) {
	authPayload, err := server.authorizeUser(ctx, []string{util.PatientRole, util.ClinicianRole, util.AdminRole})
	if err != nil {
		return nil, unauthenticatedError(err)
	}

	if authPayload.Role != util.AdminRole && authPayload.Username != req.GetSender() {
		return nil, status.Errorf(codes.PermissionDenied, "you're not authorized to send invitation")
	}

	arg := db.CreatePatientClinicianMappingTxParams{
		CreatePatientClinicianMappingParams: db.CreatePatientClinicianMappingParams{
			Sender:            req.GetSender(),
			RecipientEmail:    req.GetRecipientEmail(),
			RecipientUsername: req.GetRecipientUsername(),
		},
		AfterCreate: func(patientClinicianMapping db.PatientClinicianMapping) error {
			taskPayload := &worker.PayloadSendInvitationEmail{
				Sender:            patientClinicianMapping.Sender,
				RecipientEmail:    patientClinicianMapping.RecipientEmail,
				RecipientUsername: patientClinicianMapping.RecipientUsername,
			}
			opts := []asynq.Option{
				asynq.MaxRetry(10),
				asynq.ProcessIn(10 * time.Second),
				asynq.Queue(worker.QueueCritical),
			}

			if err := server.taskDistributor.DistributeTaskSendInvitationEmail(ctx, taskPayload, opts...); err != nil {
				return status.Errorf(codes.Internal, "failed to distribute verify email task: %s", err)
			}

			return nil

		},
	}

	txResult, err := server.store.CreatePatientClinicianMappingTx(ctx, arg)
	if err != nil {
		if db.ErrorCode(err) == db.UniqueViolation {
			return nil, status.Errorf(codes.AlreadyExists, err.Error())
		}
		return nil, status.Errorf(codes.Internal, "failed to create PatientClinicianMapping: %s", err)
	}

	rsp := &pb.CreatePatientClinicianMappingResponse{
		PatientClinicianMapping: convertPatientClinicianMapping(txResult.PatientClinicianMapping),
	}
	return rsp, nil
}
