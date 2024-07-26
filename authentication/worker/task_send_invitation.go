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
	Sender            string `json:"sender"`
	RecipientUsername string `json:"recipient_username"`
	RecipientEmail    string `json:"recipient_email"`
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

	patientClinicianMapping, err := processor.store.GetPatientClinicianMapping(ctx, payload.Sender)
	if err != nil {
		return fmt.Errorf("failed to get patientClinicianMapping: %w", err)
	}

	invitationEmail, err := processor.store.CreateVerifyInvitation(ctx, db.CreateVerifyInvitationParams{
		Sender:            patientClinicianMapping.Sender,
		RecipientEmail:    patientClinicianMapping.RecipientEmail,
		RecipientUsername: patientClinicianMapping.RecipientUsername,
		SecretCode:        util.Generate6DigitRandomInt(),
	})
	if err != nil {
		return fmt.Errorf("failed to create invitation email: %w", err)
	}

	user, err := processor.store.GetUser(ctx, payload.Sender)
	if err != nil {
		return fmt.Errorf("failed to get user: %w", err)
	}

	senderFullName := user.FirstName + " " + user.LastName

	subject := fmt.Sprintf("Invitation Request From %s", invitationEmail.Sender)
	// TODO: replace this URL with an environment variable that points to a front-end page
	invitationUrl := fmt.Sprintf("http://localhost:8089/v1/invitation_email?sender=%s&secret_code=%d", invitationEmail.Sender, invitationEmail.SecretCode)
	content := fmt.Sprintf(`Hello! you got an invitation addressed to %s, from <b>%s</b> to join Editor RPM as a connection.<br/> kindly Proceed by clicking <a href="%s">click here</a> to accept invitation.<br/> <h1>%d</h1>
	`, invitationEmail.RecipientEmail, senderFullName, invitationUrl, invitationEmail.SecretCode)
	to := []string{invitationEmail.RecipientEmail}

	err = processor.mailer.SendEmail(subject, content, to, nil, nil, nil)
	if err != nil {
		return fmt.Errorf("failed to send invitation email: %w", err)
	}

	log.Info().Str("type", task.Type()).Bytes("payload", task.Payload()).
		Str("email", user.Email).Msg("processed task")
	return nil
}
