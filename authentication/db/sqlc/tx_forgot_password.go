package db

import (
	"context"

	// "github.com/jackc/pgx/v5/pgtype"
)

type VerifyForgotPasswordTxParams struct {
	EmailId    int64
	SecretCode int64
}

type VerifyForgotPasswordTxResult struct {
	User        User
	VerifyForgotPassword VerifyForgotPassword
}

func (store *SQLStore) VerifyForgotPasswordTx(ctx context.Context, arg VerifyForgotPasswordTxParams) (VerifyForgotPasswordTxResult, error) {
	var result VerifyForgotPasswordTxResult

	err := store.execTx(ctx, func(q *Queries) error {
		var err error 

		result.VerifyForgotPassword, err = q.UpdateVerifyForgotPassword(ctx, UpdateVerifyForgotPasswordParams{
			ID:        arg.EmailId,
			SecretCode: arg.SecretCode,
		})
		if err != nil {
			return err
		}
		return err
	})

	return result, err
}