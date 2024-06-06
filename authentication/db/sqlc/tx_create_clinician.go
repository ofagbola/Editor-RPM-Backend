package db

import "context"

type CreateClinicianTxParams struct {
	CreateClinicianParams
}

type CreateClinicianTxResult struct {
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
		return err
	})

	return result, err
}