package gapi

import (
	"context"

	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	// "github.com/ofagbola/Editor-RPM-Backend/authentication/worker"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/val"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"github.com/rs/zerolog/log"
	// "github.com/hibiken/asynq"
)

func (server *Server) VerifyForgotPassword(ctx context.Context, req *pb.VerifyForgotPasswordRequest) (*pb.VerifyForgotPasswordResponse, error) {
	violations := validateVerifyForgotPasswordRequest(req)
	if violations != nil {
		return nil, invalidArgumentError(violations)
	}
	txResult, err := server.store.VerifyForgotPasswordTx(ctx, db.VerifyForgotPasswordTxParams{
		// EmailId:    req.GetEmailId(),
		Username:   req.GetUsername(),
		SecretCode: req.GetSecretCode(),
	})
	if err != nil {
		log.Fatal().Err(err).Msg("failed to verify email")

	}

	rsp := &pb.VerifyForgotPasswordResponse{
		IsUsed: txResult.VerifyForgotPassword.IsUsed,
	}
	return rsp, nil
}


func validateVerifyForgotPasswordRequest(req *pb.VerifyForgotPasswordRequest) (violations []*errdetails.BadRequest_FieldViolation) {
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