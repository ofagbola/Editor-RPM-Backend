package gapi

import (
	"context"

	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/val"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	// "google.golang.org/grpc/codes"
	// "google.golang.org/grpc/status"

		"github.com/rs/zerolog/log"
)

func (server *Server) VerifyEmail(ctx context.Context, req *pb.VerifyEmailRequest) (*pb.VerifyEmailResponse, error) {
	violations := validateVerifyEmailRequest(req)
	if violations != nil {
		return nil, invalidArgumentError(violations)
	}

	txResult, err := server.store.VerifyEmailTx(ctx, db.VerifyEmailTxParams{
		// EmailId:    req.GetEmailId(),
		Username:    req.GetUsername(),
		SecretCode: req.GetSecretCode(),
	})
	if err != nil {
		log.Fatal().Err(err).Msg( "failed to verify email")

		// return nil, status.Errorf(codes.Internal, err, "failed to verify email")
	}

	rsp := &pb.VerifyEmailResponse{
		IsVerified: txResult.User.IsEmailVerified,
	}
	return rsp, nil
}

func validateVerifyEmailRequest(req *pb.VerifyEmailRequest) (violations []*errdetails.BadRequest_FieldViolation) {
	// if err := val.ValidateEmailId(req.GetEmailId()); err != nil {
	// 	violations = append(violations, fieldViolation("email_id", err))
	// }

	if err := val.ValidateUsername(req.GetUsername()); err != nil {
		violations = append(violations, fieldViolation("username", err))
	}

	if err := val.ValidateSecretCode(req.GetSecretCode()); err != nil {
		violations = append(violations, fieldViolation("secret_code", err))
	}

	return violations
}