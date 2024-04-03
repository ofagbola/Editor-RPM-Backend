package db

import ( 
	"context"
	"github.com/jackc/pgx/v5/pgxpool"
)

// Store defines all functions to execute db queries and transactions
type Store interface {
	Querier
	CreateQuestionTx(ctx context.Context, arg CreateQuestionTxParams) (CreateQuestionTxResult, error)
	CreateQuestionConfigTx(ctx context.Context, arg CreateQuestionConfigTxParams) (CreateQuestionConfigTxResult, error)
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