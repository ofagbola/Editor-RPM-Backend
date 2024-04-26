package db

import "context"

type CreateQuestionTxParams struct {
	CreateQuestionParams
	// AfterCreate func(question Question) error
}

type CreateQuestionTxResult struct {
	Question Question
}

func (store *SQLStore) CreateQuestionTx(ctx context.Context, arg CreateQuestionTxParams) (CreateQuestionTxResult, error) {
	var result CreateQuestionTxResult

	err := store.execTx(ctx, func(q *Queries) error {
		var err error

		result.Question, err = q.CreateQuestion(ctx, arg.CreateQuestionParams)
		if err != nil {
			return err
		}
		return err
		// return arg.AfterCreate(result.Question)
	})

	return result, err
}