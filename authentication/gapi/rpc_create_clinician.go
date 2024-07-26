package gapi

import (
	"context"

	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	pb "github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) CreateClinician(ctx context.Context, req *pb.CreateClinicianRequest) (*pb.CreateClinicianResponse, error) {
	authPayload, err := server.authorizeUser(ctx, []string{util.ClinicianRole, util.AdminRole})

	if err != nil {
		return nil, unauthenticatedError(err)
	}

	arg := db.CreateClinicianTxParams{
		CreateClinicianParams: db.CreateClinicianParams{
			Username:      authPayload.Username,
			Credentials:   req.GetCredentials(),
			Specialties:   req.GetSpecialties(),
			ClinicName:    req.GetClinicName(),
			ClinicID:      req.GetClinicId(),
			Image:         req.GetImage(),
			AcceptPatient: req.GetAcceptPatient(),
		},
	}

	txResult, err := server.store.CreateClinicianTx(ctx, arg)
	if err != nil {
		if db.ErrorCode(err) == db.UniqueViolation {
			return nil, status.Errorf(codes.AlreadyExists, err.Error())
		}
		return nil, status.Errorf(codes.Internal, "failed to create Clinician: %s", err)
	}

	rsp := &pb.CreateClinicianResponse{
		Clinician: convertClinician(txResult.Clinician),
	}
	return rsp, nil
}
