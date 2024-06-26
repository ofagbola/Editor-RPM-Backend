// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.18.0

package db

import (
	"context"
)

type Querier interface {
	CreateQuestion(ctx context.Context, arg CreateQuestionParams) (Question, error)
	CreateQuestionConfig(ctx context.Context, arg CreateQuestionConfigParams) (QuestionConfig, error)
	CreateResponseQuestionConfig(ctx context.Context, arg CreateResponseQuestionConfigParams) (ResponseQuestionConfig, error)
	CreateSendQuestionConfig(ctx context.Context, arg CreateSendQuestionConfigParams) (SendQuestionConfig, error)
	DeleteQuestion(ctx context.Context, code string) error
	DeleteQuestionConfig(ctx context.Context, id int64) error
	DeleteResponseQuestionConfig(ctx context.Context, id int64) error
	DeleteSendQuestionConfig(ctx context.Context, id int64) error
	GetQuestion(ctx context.Context, code string) (Question, error)
	GetQuestionConfig(ctx context.Context, id int64) (QuestionConfig, error)
	GetResponseQuestionConfig(ctx context.Context, id int64) (ResponseQuestionConfig, error)
	GetSendQuestionConfig(ctx context.Context, id int64) (SendQuestionConfig, error)
	ListQuestionConfigs(ctx context.Context, arg ListQuestionConfigsParams) ([]QuestionConfig, error)
	ListQuestions(ctx context.Context, arg ListQuestionsParams) ([]Question, error)
	ListResponseQuestionConfigs(ctx context.Context, arg ListResponseQuestionConfigsParams) ([]ResponseQuestionConfig, error)
	ListSendQuestionConfigs(ctx context.Context, arg ListSendQuestionConfigsParams) ([]SendQuestionConfig, error)
	UpdateQuestion(ctx context.Context, arg UpdateQuestionParams) (Question, error)
	UpdateQuestionConfig(ctx context.Context, arg UpdateQuestionConfigParams) (QuestionConfig, error)
}

var _ Querier = (*Queries)(nil)
