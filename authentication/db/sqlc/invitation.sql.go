// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0
// source: invitation.sql

package db

import (
	"context"
	"time"

	"github.com/jackc/pgx/v5/pgtype"
)

const createInvitation = `-- name: CreateInvitation :one
INSERT INTO invitations (
    id,
    sender,
    recepient_username,
    recepient_email,
    secret_code,
    created_at
) VALUES (
    $1, $2, $3, $4, $5, $6
) RETURNING id, sender, recepient_username, recepient_email, secret_code, is_accepted, created_at, expired_at
`

type CreateInvitationParams struct {
	ID                int64       `json:"id"`
	Sender            string      `json:"sender"`
	RecepientUsername pgtype.Text `json:"recepient_username"`
	RecepientEmail    string      `json:"recepient_email"`
	SecretCode        int64       `json:"secret_code"`
	CreatedAt         time.Time   `json:"created_at"`
}

func (q *Queries) CreateInvitation(ctx context.Context, arg CreateInvitationParams) (Invitation, error) {
	row := q.db.QueryRow(ctx, createInvitation,
		arg.ID,
		arg.Sender,
		arg.RecepientUsername,
		arg.RecepientEmail,
		arg.SecretCode,
		arg.CreatedAt,
	)
	var i Invitation
	err := row.Scan(
		&i.ID,
		&i.Sender,
		&i.RecepientUsername,
		&i.RecepientEmail,
		&i.SecretCode,
		&i.IsAccepted,
		&i.CreatedAt,
		&i.ExpiredAt,
	)
	return i, err
}

const getInvitation = `-- name: GetInvitation :one
SELECT id, sender, recepient_username, recepient_email, secret_code, is_accepted, created_at, expired_at FROM invitations
WHERE sender = $1 
  AND expired_at > now()
ORDER BY created_at DESC 
LIMIT 1
`

func (q *Queries) GetInvitation(ctx context.Context, sender string) (Invitation, error) {
	row := q.db.QueryRow(ctx, getInvitation, sender)
	var i Invitation
	err := row.Scan(
		&i.ID,
		&i.Sender,
		&i.RecepientUsername,
		&i.RecepientEmail,
		&i.SecretCode,
		&i.IsAccepted,
		&i.CreatedAt,
		&i.ExpiredAt,
	)
	return i, err
}

const updateInvitation = `-- name: UpdateInvitation :one
UPDATE invitations
SET
    is_accepted = TRUE
WHERE
    -- id = @id
    sender = $1
    AND secret_code = $2
    AND is_accepted = FALSE
    AND expired_at > now()
RETURNING id, sender, recepient_username, recepient_email, secret_code, is_accepted, created_at, expired_at
`

type UpdateInvitationParams struct {
	Sender     string `json:"sender"`
	SecretCode int64  `json:"secret_code"`
}

func (q *Queries) UpdateInvitation(ctx context.Context, arg UpdateInvitationParams) (Invitation, error) {
	row := q.db.QueryRow(ctx, updateInvitation, arg.Sender, arg.SecretCode)
	var i Invitation
	err := row.Scan(
		&i.ID,
		&i.Sender,
		&i.RecepientUsername,
		&i.RecepientEmail,
		&i.SecretCode,
		&i.IsAccepted,
		&i.CreatedAt,
		&i.ExpiredAt,
	)
	return i, err
}