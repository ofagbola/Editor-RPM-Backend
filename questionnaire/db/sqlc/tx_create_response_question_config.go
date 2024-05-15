package db

import "context"

type CreateResponseQuestionConfigTxParams struct {
	CreateResponseQuestionConfigParams
	// AfterCreate func(ResponseQuestionConfig ResponseQuestionConfig) error
}

type CreateResponseQuestionConfigTxResult struct {
	ResponseQuestionConfig ResponseQuestionConfig
}

func (store *SQLStore) CreateResponseQuestionConfigTx(ctx context.Context, arg CreateResponseQuestionConfigTxParams) (CreateResponseQuestionConfigTxResult, error) {
	var result CreateResponseQuestionConfigTxResult

	err := store.execTx(ctx, func(q *Queries) error {
		var err error

		result.ResponseQuestionConfig, err = q.CreateResponseQuestionConfig(ctx, arg.CreateResponseQuestionConfigParams)
		if err != nil {
			return err
		}
		return err
		// return arg.AfterCreate(result.ResponseQuestionConfig)
	})

	return result, err
}
