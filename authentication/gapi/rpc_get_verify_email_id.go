package gapi

import (
	"context"
	"errors"

	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/val"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/status"
	"google.golang.org/grpc/codes"
)

func (server *Server) GetVerifyEmailId(ctx context.Context, req *pb.GetVerifyEmailIdRequest) (*pb.GetVerifyEmailIdResponse, error) {

	violations := validateGetVerifyEmailIdRequest(req)
	if violations != nil {
		return nil, invalidArgumentError(violations)
	}

	_, err := server.authorizeUser(ctx, []string{util.ClinicianRole, util.AdminRole,  util.PatientRole})
	if err != nil {
		return nil, unauthenticatedError(err)
	}
	
	verify, err := server.store.GetVerifyEmail(ctx, req.GetUsername())
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "Verify Email Id not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to find verifyEmail")
	}


	rsp := &pb.GetVerifyEmailIdResponse{
		Id: verify.ID,
	}
	return rsp, nil
}

func validateGetVerifyEmailIdRequest(req *pb.GetVerifyEmailIdRequest) (violations []*errdetails.BadRequest_FieldViolation) {
	if err := val.ValidateUsername(req.GetUsername()); err != nil {
		violations = append(violations, fieldViolation("username", err))
	}

	return violations
}