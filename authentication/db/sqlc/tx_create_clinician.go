package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

type CreateClinicianTxParams struct {
	CreateClinicianParams
}

type CreateClinicianTxResult struct {
	User User
	Clinician Clinician
}

func (store *SQLStore) CreateClinicianTx(ctx context.Context, arg CreateClinicianTxParams) (CreateClinicianTxResult, error) {
	var result CreateClinicianTxResult

	err := store.execTx(ctx, func(q *Queries) error {
		var err error

		result.Clinician, err = q.CreateClinician(ctx, arg.CreateClinicianParams)
		if err != nil {
			return err
		}

		result.User, err = q.UpdateUser(ctx, UpdateUserParams{
			Username: result.Clinician.Username,
			IsUserOnboarded: pgtype.Bool{
				Bool:  true,
				Valid: true,
			},
		})
		return err
	})

	return result, err
}
