// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0
// source: verify_invitation.sql

package db

import (
	"context"
	"time"

	"github.com/jackc/pgx/v5/pgtype"
)

const createVerifyInvitation = `-- name: CreateVerifyInvitation :one
INSERT INTO verify_invitations (
    id,
    sender,
    recipient_username,
    recipient_email,
    secret_code,
    is_used,
    created_at
) VALUES (
    $1, $2, $3, $4, $5, $6, $7
) RETURNING id, sender, recipient_username, recipient_email, secret_code, is_used, created_at, expired_at
`

type CreateVerifyInvitationParams struct {
	ID                int64     `json:"id"`
	Sender            string    `json:"sender"`
	RecipientUsername string    `json:"recipient_username"`
	RecipientEmail    string    `json:"recipient_email"`
	SecretCode        int64     `json:"secret_code"`
	IsUsed            bool      `json:"is_used"`
	CreatedAt         time.Time `json:"created_at"`
}

func (q *Queries) CreateVerifyInvitation(ctx context.Context, arg CreateVerifyInvitationParams) (VerifyInvitation, error) {
	row := q.db.QueryRow(ctx, createVerifyInvitation,
		arg.ID,
		arg.Sender,
		arg.RecipientUsername,
		arg.RecipientEmail,
		arg.SecretCode,
		arg.IsUsed,
		arg.CreatedAt,
	)
	var i VerifyInvitation
	err := row.Scan(
		&i.ID,
		&i.Sender,
		&i.RecipientUsername,
		&i.RecipientEmail,
		&i.SecretCode,
		&i.IsUsed,
		&i.CreatedAt,
		&i.ExpiredAt,
	)
	return i, err
}

const getVerifyInvitation = `-- name: GetVerifyInvitation :one
SELECT id, sender, recipient_username, recipient_email, secret_code, is_used, created_at, expired_at FROM verify_invitations
WHERE id = $1 
  AND expired_at > now()
ORDER BY created_at DESC 
LIMIT 1
`

func (q *Queries) GetVerifyInvitation(ctx context.Context, id int64) (VerifyInvitation, error) {
	row := q.db.QueryRow(ctx, getVerifyInvitation, id)
	var i VerifyInvitation
	err := row.Scan(
		&i.ID,
		&i.Sender,
		&i.RecipientUsername,
		&i.RecipientEmail,
		&i.SecretCode,
		&i.IsUsed,
		&i.CreatedAt,
		&i.ExpiredAt,
	)
	return i, err
}

const updateVerifyInvitation = `-- name: UpdateVerifyInvitation :one
UPDATE verify_invitations
SET
    is_used = TRUE,
    recipient_username = COALESCE($1, recipient_username)
WHERE
    id = $2
    AND sender = $3
    AND recipient_email = $4
    AND secret_code = $5
    AND is_used = FALSE
    AND expired_at > now()
RETURNING id, sender, recipient_username, recipient_email, secret_code, is_used, created_at, expired_at
`

type UpdateVerifyInvitationParams struct {
	RecipientUsername pgtype.Text `json:"recipient_username"`
	ID                int64       `json:"id"`
	Sender            string      `json:"sender"`
	RecipientEmail    string      `json:"recipient_email"`
	SecretCode        int64       `json:"secret_code"`
}

func (q *Queries) UpdateVerifyInvitation(ctx context.Context, arg UpdateVerifyInvitationParams) (VerifyInvitation, error) {
	row := q.db.QueryRow(ctx, updateVerifyInvitation,
		arg.RecipientUsername,
		arg.ID,
		arg.Sender,
		arg.RecipientEmail,
		arg.SecretCode,
	)
	var i VerifyInvitation
	err := row.Scan(
		&i.ID,
		&i.Sender,
		&i.RecipientUsername,
		&i.RecipientEmail,
		&i.SecretCode,
		&i.IsUsed,
		&i.CreatedAt,
		&i.ExpiredAt,
	)
	return i, err
}