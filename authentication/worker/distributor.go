package worker

import (
	"context"

	"github.com/hibiken/asynq"
)

type TaskDistributor interface {
	DistributeTaskSendVerifyEmail(
		ctx context.Context,
		payload *PayloadSendVerifyEmail,
		opts ...asynq.Option,
	) error
	DistributeTaskSendForgotPasswordToEmail(
		ctx context.Context,
		payload *PayloadSendForgotPasswordToEmail,
		opts ...asynq.Option,
	) error
	DistributeTaskSendInvitationEmail(
		ctx context.Context,
		payload *PayloadSendInvitationEmail,
		opts ...asynq.Option,
	) error
}

type RedisTaskDistributor struct {
	client *asynq.Client
}

func NewRedisTaskDistributor(redisOpt asynq.RedisClientOpt) TaskDistributor {
	client := asynq.NewClient(redisOpt)
	return &RedisTaskDistributor{
		client: client,
	}
}