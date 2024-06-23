package gapi

import (
	"context"

	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	// "github.com/ofagbola/Editor-RPM-Backend/authentication/worker"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"github.com/rs/zerolog/log"
	// "github.com/hibiken/asynq"

)

func (server *Server) VerifyForgotPassword(ctx context.Context, req *pb.VerifyForgotPasswordRequest) (*pb.VerifyForgotPasswordResponse, error) {


	txResult, err := server.store.VerifyForgotPasswordTx(ctx, db.VerifyForgotPasswordTxParams{
		EmailId:    req.GetEmailId(),
		SecretCode: req.GetSecretCode(),
	})
	if err != nil {
		log.Fatal().Err(err).Msg( "failed to verify email")

	}

	rsp := &pb.VerifyForgotPasswordResponse{
		IsUsed: txResult.VerifyForgotPassword.IsUsed,
	}
	return rsp, nil
}

