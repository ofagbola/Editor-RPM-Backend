// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.18.0
// source: response_question_config.sql

package db

import (
	"context"
)

const createResponseQuestionConfig = `-- name: CreateResponseQuestionConfig :one
INSERT INTO response_question_configs (
  question_config_id,  
  response,
  patient
) VALUES (
  $1, $2, $3
) RETURNING id, question_config_id, response, patient, created_at
`

type CreateResponseQuestionConfigParams struct {
	QuestionConfigID int64    `json:"question_config_id"`
	Response         []string `json:"response"`
	Patient          string   `json:"patient"`
}

func (q *Queries) CreateResponseQuestionConfig(ctx context.Context, arg CreateResponseQuestionConfigParams) (ResponseQuestionConfig, error) {
	row := q.db.QueryRow(ctx, createResponseQuestionConfig, arg.QuestionConfigID, arg.Response, arg.Patient)
	var i ResponseQuestionConfig
	err := row.Scan(
		&i.ID,
		&i.QuestionConfigID,
		&i.Response,
		&i.Patient,
		&i.CreatedAt,
	)
	return i, err
}

const deleteResponseQuestionConfig = `-- name: DeleteResponseQuestionConfig :exec
DELETE FROM response_question_configs
WHERE id = $1
`

func (q *Queries) DeleteResponseQuestionConfig(ctx context.Context, id int64) error {
	_, err := q.db.Exec(ctx, deleteResponseQuestionConfig, id)
	return err
}

const getResponseQuestionConfig = `-- name: GetResponseQuestionConfig :one
SELECT id, question_config_id, response, patient, created_at FROM response_question_configs
WHERE id = $1 LIMIT 1
`

func (q *Queries) GetResponseQuestionConfig(ctx context.Context, id int64) (ResponseQuestionConfig, error) {
	row := q.db.QueryRow(ctx, getResponseQuestionConfig, id)
	var i ResponseQuestionConfig
	err := row.Scan(
		&i.ID,
		&i.QuestionConfigID,
		&i.Response,
		&i.Patient,
		&i.CreatedAt,
	)
	return i, err
}

const listResponseQuestionConfigs = `-- name: ListResponseQuestionConfigs :many
SELECT id, question_config_id, response, patient, created_at FROM response_question_configs
ORDER BY id
LIMIT $1
OFFSET $2
`

type ListResponseQuestionConfigsParams struct {
	Limit  int32 `json:"limit"`
	Offset int32 `json:"offset"`
}

func (q *Queries) ListResponseQuestionConfigs(ctx context.Context, arg ListResponseQuestionConfigsParams) ([]ResponseQuestionConfig, error) {
	rows, err := q.db.Query(ctx, listResponseQuestionConfigs, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []ResponseQuestionConfig{}
	for rows.Next() {
		var i ResponseQuestionConfig
		if err := rows.Scan(
			&i.ID,
			&i.QuestionConfigID,
			&i.Response,
			&i.Patient,
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