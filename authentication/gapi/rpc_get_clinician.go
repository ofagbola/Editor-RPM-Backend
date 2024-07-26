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

func (server *Server) GetClinician(ctx context.Context, req *pb.GetClinicianRequest) (*pb.GetClinicianResponse, error) {

	violations := validateGetClinicianRequest(req)
	if violations != nil {
		return nil, invalidArgumentError(violations)
	}

	_, err := server.authorizeUser(ctx, []string{util.ClinicianRole, util.AdminRole, util.PatientRole})
	if err != nil {
		return nil, unauthenticatedError(err)
	}

	clinician, err := server.store.GetClinician(ctx, req.GetUsername())
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "clinician not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to find clinician")
	}

	rsp := &pb.GetClinicianResponse{
		Clinician: convertClinician(clinician),
	}
	return rsp, nil
}

func validateGetClinicianRequest(req *pb.GetClinicianRequest) (violations []*errdetails.BadRequest_FieldViolation) {
	if err := val.ValidateUsername(req.GetUsername()); err != nil {
		violations = append(violations, fieldViolation("username", err))
	}

	return violations
}
