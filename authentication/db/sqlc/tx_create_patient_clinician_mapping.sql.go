package db

import "context"

type CreatePatientClinicianMappingTxParams struct {
	CreatePatientClinicianMappingParams
	AfterCreate func(patientClinicianMapping PatientClinicianMapping) error
}

type CreatePatientClinicianMappingTxResult struct {
	PatientClinicianMapping PatientClinicianMapping
}

func (store *SQLStore) CreatePatientClinicianMappingTx(ctx context.Context, arg CreatePatientClinicianMappingTxParams) (CreatePatientClinicianMappingTxResult, error) {
	var result CreatePatientClinicianMappingTxResult

	err := store.execTx(ctx, func(q *Queries) error {
		var err error

		result.PatientClinicianMapping, err = q.CreatePatientClinicianMapping(ctx, arg.CreatePatientClinicianMappingParams)
		if err != nil {
			return err
		}

		return arg.AfterCreate(result.PatientClinicianMapping)
	})

	return result, err
}