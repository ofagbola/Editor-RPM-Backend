package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

type VerifyInvitationTxParams struct {
	Id                int64
	Sender            string
	SecretCode        int64
	RecipientEmail    string
	RecipientUsername string
}

type VerifyInvitationTxResult struct {
	User                    User
	PatientClinicianMapping PatientClinicianMapping
	VerifyInvitation        VerifyInvitation
}

func (store *SQLStore) VerifyInvitationTx(ctx context.Context, arg VerifyInvitationTxParams) (VerifyInvitationTxResult, error) {
	var result VerifyInvitationTxResult

	err := store.execTx(ctx, func(q *Queries) error {
		var err error

		result.VerifyInvitation, err = q.UpdateVerifyInvitation(ctx, UpdateVerifyInvitationParams{
			ID:             arg.Id,
			Sender:         arg.Sender,
			RecipientEmail: arg.RecipientEmail,
			SecretCode:     arg.SecretCode,
			RecipientUsername: pgtype.Text{
				String: arg.RecipientUsername,
			},
		})
		if err != nil {
			return err
		}

		result.PatientClinicianMapping, err = q.UpdatePatientClinicianMapping(ctx, UpdatePatientClinicianMappingParams{
			ID: result.VerifyInvitation.ID,//should be that of mapping
			InviteAccepted: pgtype.Bool{
				Bool:  true,
				Valid: true,
			},
			RecipientUsername: pgtype.Text{
				String: result.VerifyInvitation.RecipientUsername,
			},
		})
		return err
	})

	return result, err
}
