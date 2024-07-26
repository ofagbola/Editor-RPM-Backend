package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"
)

// Store defines all functions to execute db queries and transactions
type Store interface {
	Querier
	CreateUserTx(ctx context.Context, arg CreateUserTxParams) (CreateUserTxResult, error)
	CreatePatientClinicianMappingTx(ctx context.Context, arg CreatePatientClinicianMappingTxParams) (CreatePatientClinicianMappingTxResult, error)
	CreatePatientTx(ctx context.Context, arg CreatePatientTxParams) (CreatePatientTxResult, error)
	CreateClinicianTx(ctx context.Context, arg CreateClinicianTxParams) (CreateClinicianTxResult, error)
	VerifyEmailTx(ctx context.Context, arg VerifyEmailTxParams) (VerifyEmailTxResult, error)
	VerifyForgotPasswordTx(ctx context.Context, arg VerifyForgotPasswordTxParams) (VerifyForgotPasswordTxResult, error)
	VerifyInvitationTx(ctx context.Context, arg VerifyInvitationTxParams) (VerifyInvitationTxResult, error)
}

// SQLStore provides all functions to execute SQL queries and transactions
type SQLStore struct {
	connPool *pgxpool.Pool
	*Queries
}

// NewStore creates a new store
func NewStore(connPool *pgxpool.Pool) Store {
	return &SQLStore{
		connPool: connPool,
		Queries:  New(connPool),
	}
}