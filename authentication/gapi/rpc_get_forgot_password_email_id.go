package gapi

import (
	"context"
	"errors"

	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/val"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/status" 
	"google.golang.org/grpc/codes"
)

func (server *Server) GetForgotPasswordEmailId(ctx context.Context, req *pb.GetVerifyForgotPasswordEmailIdRequest) (*pb.GetVerifyForgotPasswordEmailIdResponse, error) {

	violations := validateGetVerifyForgotPasswordIdRequest(req)
	if violations != nil {
		return nil, invalidArgumentError(violations)
	}
	
	verify, err := server.store.GetVerifyForgotPassword(ctx, req.GetUsername())
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "Verify Forgot Email Id not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to find verify Forgot Password EmailId")
	}


	rsp := &pb.GetVerifyForgotPasswordEmailIdResponse{
		Id: verify.ID,
	}
	return rsp, nil
}

func validateGetVerifyForgotPasswordIdRequest(req *pb.GetVerifyForgotPasswordEmailIdRequest) (violations []*errdetails.BadRequest_FieldViolation) {
	if err := val.ValidateUsernameOrEmail(req.GetUsername()); err != nil {
		violations = append(violations, fieldViolation("username", err))
	}

	return violations
} 