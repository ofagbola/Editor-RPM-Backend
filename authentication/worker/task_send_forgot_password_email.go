package worker

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/hibiken/asynq"
	"github.com/rs/zerolog/log"
	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"
)

const TaskSendForgotPasswordToEmail = "task:send_verify_forgot_password"

type PayloadSendForgotPasswordToEmail struct {
	Username string `json:"username"`
	// Email string `json:"email"`
}

func (distributor *RedisTaskDistributor) DistributeTaskSendForgotPasswordToEmail(
	ctx context.Context,
	payload *PayloadSendForgotPasswordToEmail,
	opts ...asynq.Option,
) error {
	jsonPayload, err := json.Marshal(payload)
	if err != nil {
		return fmt.Errorf("failed to marshal task payload: %w", err)
	}

	task := asynq.NewTask(TaskSendForgotPasswordToEmail, jsonPayload, opts...)
	info, err := distributor.client.EnqueueContext(ctx, task)
	if err != nil {
		return fmt.Errorf("failed to enqueue task: %w", err)
	}

	log.Info().Str("type", task.Type()).Bytes("payload", task.Payload()).
		Str("queue", info.Queue).Int("max_retry", info.MaxRetry).Msg("enqueued task")
	return nil
}

func (processor *RedisTaskProcessor) ProcessTaskSendForgotPasswordToEmail(ctx context.Context, task *asynq.Task) error {
	var payload PayloadSendForgotPasswordToEmail
	if err := json.Unmarshal(task.Payload(), &payload); err != nil {
		return fmt.Errorf("failed to unmarshal payload: %w", asynq.SkipRetry)
	}

	user, err := processor.store.GetUser(ctx, payload.Username)
	if err != nil {
		return fmt.Errorf("failed to get user: %w", err)
	}

	forgotPassword, err := processor.store.CreateVerifyForgotPassword(ctx, db.CreateVerifyForgotPasswordParams{
		Username:   user.Username,
		Email:      user.Email,
		SecretCode: util.Generate6DigitRandomInt(),
	})
	if err != nil {
		return fmt.Errorf("failed to create verify email: %w", err)
	}

	subject := " Editor RPM Password Reset"
	// TODO: replace this URL with an environment variable that points to a front-end page
	verifyUrl := fmt.Sprintf("http://localhost:8089/v1/verify_forgot_password?email_id=%d&secret_code=%d",
		forgotPassword.ID, forgotPassword.SecretCode)
	content := fmt.Sprintf(`Hello %s,<br/>Reset your password with this link!<br/> Please <a href="%s">click here</a> to reset your email address.<br/> <h1>%d</h1>
	`, user.FirstName, verifyUrl, forgotPassword.SecretCode)
	to := []string{user.Email}

	err = processor.mailer.SendEmail(subject, content, to, nil, nil, nil)
	if err != nil {
		return fmt.Errorf("failed to send verify email: %w", err)
	}

	log.Info().Str("type", task.Type()).Bytes("payload", task.Payload()).
		Str("email", user.Email).Msg("processed task")
	return nil
}