package db

import (
	"context"
	
	"github.com/jackc/pgx/v5/pgtype"
)

type CreatePatientTxParams struct {
	CreatePatientParams
}

type CreatePatientTxResult struct {
	User    User
	Patient Patient
}

func (store *SQLStore) CreatePatientTx(ctx context.Context, arg CreatePatientTxParams) (CreatePatientTxResult, error) {
	var result CreatePatientTxResult

	err := store.execTx(ctx, func(q *Queries) error {
		var err error

		result.Patient, err = q.CreatePatient(ctx, arg.CreatePatientParams)
		if err != nil {
			return err
		}

		result.User, err = q.UpdateUser(ctx, UpdateUserParams{
			Username: result.Patient.Username,
			IsUserOnboarded: pgtype.Bool{
				Bool:  true,
				Valid: true,
			},
		})
		return err
	})

	return result, err
}
