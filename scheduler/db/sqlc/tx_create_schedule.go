package db

import "context"

type CreateScheduleTxParams struct {
	CreateScheduleParams
	// AfterCreate func(schedule Schedule) error
}

type CreateScheduleTxResult struct {
	Schedule Schedule
}

func (store *SQLStore) CreateScheduleTx(ctx context.Context, arg CreateScheduleTxParams) (CreateScheduleTxResult, error) {
	var result CreateScheduleTxResult

	err := store.execTx(ctx, func(q *Queries) error {
		var err error

		result.Schedule, err = q.CreateSchedule(ctx, arg.CreateScheduleParams)
		if err != nil {
			return err
		}
		return err
		// return arg.AfterCreate(result.Schedule)
	})

	return result, err
}