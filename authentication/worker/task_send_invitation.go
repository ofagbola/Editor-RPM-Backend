package worker

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/hibiken/asynq"
	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"
	"github.com/rs/zerolog/log"
)

const TaskSendInvitationEmail = "task:send_invitation_email"

type PayloadSendInvitationEmail struct {
	Username string `json:"username"`
}

func (distributor *RedisTaskDistributor) DistributeTaskSendInvitationEmail(
	ctx context.Context,
	payload *PayloadSendInvitationEmail,
	opts ...asynq.Option,
) error {
	jsonPayload, err := json.Marshal(payload)
	if err != nil {
		return fmt.Errorf("failed to marshal task payload: %w", err)
	}

	task := asynq.NewTask(TaskSendInvitationEmail, jsonPayload, opts...)
	info, err := distributor.client.EnqueueContext(ctx, task)
	if err != nil {
		return fmt.Errorf("failed to enqueue task: %w", err)
	}

	log.Info().Str("type", task.Type()).Bytes("payload", task.Payload()).
		Str("queue", info.Queue).Int("max_retry", info.MaxRetry).Msg("enqueued task")
	return nil
}

func (processor *RedisTaskProcessor) ProcessTaskSendInvitationEmail(ctx context.Context, task *asynq.Task) error {
	var payload PayloadSendInvitationEmail
	if err := json.Unmarshal(task.Payload(), &payload); err != nil {
		return fmt.Errorf("failed to unmarshal payload: %w", asynq.SkipRetry)
	}

	user, err := processor.store.GetUser(ctx, payload.Username)
	if err != nil {
		return fmt.Errorf("failed to get user: %w", err)
	}

	invitationEmail, err := processor.store.CreateInvitation(ctx, db.CreateInvitationParams{
		Sender:         user.Username,
		RecepientEmail: user.Email,
		SecretCode:     util.Generate6DigitRandomInt(),
	})
	if err != nil {
		return fmt.Errorf("failed to create invitation email: %w", err)
	}

	subject := "Welcome to Editor RPM"
	// TODO: replace this URL with an environment variable that points to a front-end page
	invitationUrl := fmt.Sprintf("http://localhost:8089/v1/invitation_email?email_id=%d&secret_code=%d",
		invitationEmail.ID, invitationEmail.SecretCode)
	content := fmt.Sprintf(`Hello %s,<br/>Thank you for registering with us!<br/> Please <a href="%s">click here</a> to invitation your email address.<br/>
	`, user.FirstName, invitationUrl)
	to := []string{user.Email}

	err = processor.mailer.SendEmail(subject, content, to, nil, nil, nil)
	if err != nil {
		return fmt.Errorf("failed to send invitation email: %w", err)
	}

	log.Info().Str("type", task.Type()).Bytes("payload", task.Payload()).
		Str("email", user.Email).Msg("processed task")
	return nil
}
