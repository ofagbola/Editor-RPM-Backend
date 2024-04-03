package db

import "context"

type CreateQuestionConfigTxParams struct {
	CreateQuestionConfigParams
	// AfterCreate func(questionConfig QuestionConfig) error
}

type CreateQuestionConfigTxResult struct {
	QuestionConfig QuestionConfig
}

func (store *SQLStore) CreateQuestionConfigTx(ctx context.Context, arg CreateQuestionConfigTxParams) (CreateQuestionConfigTxResult, error) {
	var result CreateQuestionConfigTxResult

	err := store.execTx(ctx, func(q *Queries) error {
		var err error

		result.QuestionConfig, err = q.CreateQuestionConfig(ctx, arg.CreateQuestionConfigParams)
		if err != nil {
			return err
		}
		return err
		// return arg.AfterCreate(result.QuestionConfig)
	})

	return result, err
}
