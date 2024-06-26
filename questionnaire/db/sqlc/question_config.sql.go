// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.18.0
// source: question_config.sql

package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

const createQuestionConfig = `-- name: CreateQuestionConfig :one
INSERT INTO question_configs (
  code,
  title,  
  description,
  questions,
  created_by
) VALUES (
  $1, $2, $3, $4, $5
) RETURNING id, code, title, description, questions, created_by, created_at
`

type CreateQuestionConfigParams struct {
	Code        string   `json:"code"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Questions   []string `json:"questions"`
	CreatedBy   string   `json:"created_by"`
}

func (q *Queries) CreateQuestionConfig(ctx context.Context, arg CreateQuestionConfigParams) (QuestionConfig, error) {
	row := q.db.QueryRow(ctx, createQuestionConfig,
		arg.Code,
		arg.Title,
		arg.Description,
		arg.Questions,
		arg.CreatedBy,
	)
	var i QuestionConfig
	err := row.Scan(
		&i.ID,
		&i.Code,
		&i.Title,
		&i.Description,
		&i.Questions,
		&i.CreatedBy,
		&i.CreatedAt,
	)
	return i, err
}

const deleteQuestionConfig = `-- name: DeleteQuestionConfig :exec
DELETE FROM question_configs
WHERE id = $1
`

func (q *Queries) DeleteQuestionConfig(ctx context.Context, id int64) error {
	_, err := q.db.Exec(ctx, deleteQuestionConfig, id)
	return err
}

const getQuestionConfig = `-- name: GetQuestionConfig :one
SELECT id, code, title, description, questions, created_by, created_at FROM question_configs
WHERE id = $1 LIMIT 1
`

func (q *Queries) GetQuestionConfig(ctx context.Context, id int64) (QuestionConfig, error) {
	row := q.db.QueryRow(ctx, getQuestionConfig, id)
	var i QuestionConfig
	err := row.Scan(
		&i.ID,
		&i.Code,
		&i.Title,
		&i.Description,
		&i.Questions,
		&i.CreatedBy,
		&i.CreatedAt,
	)
	return i, err
}

const listQuestionConfigs = `-- name: ListQuestionConfigs :many
SELECT id, code, title, description, questions, created_by, created_at FROM question_configs
ORDER BY id
LIMIT $1
OFFSET $2
`

type ListQuestionConfigsParams struct {
	Limit  int32 `json:"limit"`
	Offset int32 `json:"offset"`
}

func (q *Queries) ListQuestionConfigs(ctx context.Context, arg ListQuestionConfigsParams) ([]QuestionConfig, error) {
	rows, err := q.db.Query(ctx, listQuestionConfigs, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []QuestionConfig{}
	for rows.Next() {
		var i QuestionConfig
		if err := rows.Scan(
			&i.ID,
			&i.Code,
			&i.Title,
			&i.Description,
			&i.Questions,
			&i.CreatedBy,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updateQuestionConfig = `-- name: UpdateQuestionConfig :one
UPDATE question_configs
SET
  title = COALESCE($1, title),
  description = COALESCE($2, description),
  questions = COALESCE($3, questions)
WHERE
 created_by = $4
  AND id = $5
RETURNING id, code, title, description, questions, created_by, created_at
`

type UpdateQuestionConfigParams struct {
	Title       pgtype.Text `json:"title"`
	Description pgtype.Text `json:"description"`
	Questions   []string    `json:"questions"`
	CreatedBy   string      `json:"created_by"`
	ID          int64       `json:"id"`
}

func (q *Queries) UpdateQuestionConfig(ctx context.Context, arg UpdateQuestionConfigParams) (QuestionConfig, error) {
	row := q.db.QueryRow(ctx, updateQuestionConfig,
		arg.Title,
		arg.Description,
		arg.Questions,
		arg.CreatedBy,
		arg.ID,
	)
	var i QuestionConfig
	err := row.Scan(
		&i.ID,
		&i.Code,
		&i.Title,
		&i.Description,
		&i.Questions,
		&i.CreatedBy,
		&i.CreatedAt,
	)
	return i, err
}
