package gapi

import (
	"context"
	"errors"

	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/val"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) GetPatient(ctx context.Context, req *pb.GetPatientRequest) (*pb.GetPatientResponse, error) {

	violations := validateGetPatientRequest(req)
	if violations != nil {
		return nil, invalidArgumentError(violations)
	}

	_, err := server.authorizeUser(ctx, []string{util.PatientRole, util.AdminRole, util.PatientRole})
	if err != nil {
		return nil, unauthenticatedError(err)
	}

	patient, err := server.store.GetPatient(ctx, req.GetUsername())
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "patient not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to find patient")
	}

	rsp := &pb.GetPatientResponse{
		Patient: convertPatient(patient),
	}
	return rsp, nil
}

func validateGetPatientRequest(req *pb.GetPatientRequest) (violations []*errdetails.BadRequest_FieldViolation) {
	if err := val.ValidateUsernameOrEmail(req.GetUsername()); err != nil {
		violations = append(violations, fieldViolation("username", err))
	}

	return violations
}
