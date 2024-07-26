package gapi

import (
	"context"
	"github.com/rs/zerolog/log"

	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) VerifyInvitation(ctx context.Context, req *pb.VerifyInvitationRequest) (*pb.VerifyInvitationResponse, error) {
	authPayload, err := server.authorizeUser(ctx, []string{util.PatientRole, util.ClinicianRole, util.AdminRole})
	if err != nil {
		return nil, unauthenticatedError(err)
	}

	if authPayload.Role != util.AdminRole && authPayload.Username != req.GetRecipientUsername() {
		return nil, status.Errorf(codes.PermissionDenied, "cannot update other user's info")
	}

	txResult, err := server.store.VerifyInvitationTx(ctx, db.VerifyInvitationTxParams{
		RecipientUsername: req.GetRecipientUsername(),
		RecipientEmail:    req.GetRecipientEmail(),
		SecretCode:        req.GetSecretCode(),
		Sender:        req.GetSender(),
	})
	if err != nil {
		log.Fatal().Err(err).Msg("failed to verify invitation")

		// return nil, status.Errorf(codes.Internal, err, "failed to verify email")
	}

	rsp := &pb.VerifyInvitationResponse{
		InviteAccepted: txResult.PatientClinicianMapping.InviteAccepted,
	}
	return rsp, nil
}
