package db

import "context"

type CreatePatientTxParams struct {
	CreatePatientParams
}

type CreatePatientTxResult struct {
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
		return err
	})

	return result, err
}