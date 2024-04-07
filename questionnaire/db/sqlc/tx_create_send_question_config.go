package db

import "context"

type CreateSendQuestionConfigTxParams struct {
	CreateSendQuestionConfigParams
	// AfterCreate func(sendQuestionConfig SendQuestionConfig) error
}

type CreateSendQuestionConfigTxResult struct {
	SendQuestionConfig SendQuestionConfig
}

func (store *SQLStore) CreateSendQuestionConfigTx(ctx context.Context, arg CreateSendQuestionConfigTxParams) (CreateSendQuestionConfigTxResult, error) {
	var result CreateSendQuestionConfigTxResult

	err := store.execTx(ctx, func(q *Queries) error {
		var err error

		result.SendQuestionConfig, err = q.CreateSendQuestionConfig(ctx, arg.CreateSendQuestionConfigParams)
		if err != nil {
			return err
		}
		return err
		// return arg.AfterCreate(result.SendQuestionConfig)
	})

	return result, err
}
