// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0
// source: user.sql

package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

const createUser = `-- name: CreateUser :one
INSERT INTO users (
  email,  
  username,
  first_name,
  last_name,
  dob,
  gender,
  location,
  languages,
  ethnicity,
  role,
  phone_number,
  hashed_password,
  is_email_verified,
  is_user_onboarded
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
) RETURNING username, email, role, first_name, last_name, dob, gender, location, languages, ethnicity, phone_number, hashed_password, is_email_verified, is_user_onboarded, password_changed_at, created_at
`

type CreateUserParams struct {
	Email           string   `json:"email"`
	Username        string   `json:"username"`
	FirstName       string   `json:"first_name"`
	LastName        string   `json:"last_name"`
	Dob             string   `json:"dob"`
	Gender          string   `json:"gender"`
	Location        string   `json:"location"`
	Languages       []string `json:"languages"`
	Ethnicity       string   `json:"ethnicity"`
	Role            string   `json:"role"`
	PhoneNumber     string   `json:"phone_number"`
	HashedPassword  string   `json:"hashed_password"`
	IsEmailVerified bool     `json:"is_email_verified"`
	IsUserOnboarded bool     `json:"is_user_onboarded"`
}

func (q *Queries) CreateUser(ctx context.Context, arg CreateUserParams) (User, error) {
	row := q.db.QueryRow(ctx, createUser,
		arg.Email,
		arg.Username,
		arg.FirstName,
		arg.LastName,
		arg.Dob,
		arg.Gender,
		arg.Location,
		arg.Languages,
		arg.Ethnicity,
		arg.Role,
		arg.PhoneNumber,
		arg.HashedPassword,
		arg.IsEmailVerified,
		arg.IsUserOnboarded,
	)
	var i User
	err := row.Scan(
		&i.Username,
		&i.Email,
		&i.Role,
		&i.FirstName,
		&i.LastName,
		&i.Dob,
		&i.Gender,
		&i.Location,
		&i.Languages,
		&i.Ethnicity,
		&i.PhoneNumber,
		&i.HashedPassword,
		&i.IsEmailVerified,
		&i.IsUserOnboarded,
		&i.PasswordChangedAt,
		&i.CreatedAt,
	)
	return i, err
}

const getUser = `-- name: GetUser :one
SELECT username, email, role, first_name, last_name, dob, gender, location, languages, ethnicity, phone_number, hashed_password, is_email_verified, is_user_onboarded, password_changed_at, created_at FROM users
WHERE username = $1 OR email = $1 LIMIT 1
`

func (q *Queries) GetUser(ctx context.Context, username string) (User, error) {
	row := q.db.QueryRow(ctx, getUser, username)
	var i User
	err := row.Scan(
		&i.Username,
		&i.Email,
		&i.Role,
		&i.FirstName,
		&i.LastName,
		&i.Dob,
		&i.Gender,
		&i.Location,
		&i.Languages,
		&i.Ethnicity,
		&i.PhoneNumber,
		&i.HashedPassword,
		&i.IsEmailVerified,
		&i.IsUserOnboarded,
		&i.PasswordChangedAt,
		&i.CreatedAt,
	)
	return i, err
}

const updateUser = `-- name: UpdateUser :one
UPDATE users
SET
  hashed_password = COALESCE($1, hashed_password),
  password_changed_at = COALESCE($2, password_changed_at),
  first_name = COALESCE($3, first_name),
  last_name = COALESCE($4, last_name),
  phone_number = COALESCE($5, phone_number),
  languages = COALESCE($6, languages),
  location = COALESCE($7, location),
  email = COALESCE($8, email),
  is_email_verified = COALESCE($9, is_email_verified),
  is_user_onboarded = COALESCE($10, is_user_onboarded)
WHERE
  username = $11
RETURNING username, email, role, first_name, last_name, dob, gender, location, languages, ethnicity, phone_number, hashed_password, is_email_verified, is_user_onboarded, password_changed_at, created_at
`

type UpdateUserParams struct {
	HashedPassword    pgtype.Text        `json:"hashed_password"`
	PasswordChangedAt pgtype.Timestamptz `json:"password_changed_at"`
	FirstName         pgtype.Text        `json:"first_name"`
	LastName          pgtype.Text        `json:"last_name"`
	PhoneNumber       pgtype.Text        `json:"phone_number"`
	Languages         []string           `json:"languages"`
	Location          pgtype.Text        `json:"location"`
	Email             pgtype.Text        `json:"email"`
	IsEmailVerified   pgtype.Bool        `json:"is_email_verified"`
	IsUserOnboarded   pgtype.Bool        `json:"is_user_onboarded"`
	Username          string             `json:"username"`
}

func (q *Queries) UpdateUser(ctx context.Context, arg UpdateUserParams) (User, error) {
	row := q.db.QueryRow(ctx, updateUser,
		arg.HashedPassword,
		arg.PasswordChangedAt,
		arg.FirstName,
		arg.LastName,
		arg.PhoneNumber,
		arg.Languages,
		arg.Location,
		arg.Email,
		arg.IsEmailVerified,
		arg.IsUserOnboarded,
		arg.Username,
	)
	var i User
	err := row.Scan(
		&i.Username,
		&i.Email,
		&i.Role,
		&i.FirstName,
		&i.LastName,
		&i.Dob,
		&i.Gender,
		&i.Location,
		&i.Languages,
		&i.Ethnicity,
		&i.PhoneNumber,
		&i.HashedPassword,
		&i.IsEmailVerified,
		&i.IsUserOnboarded,
		&i.PasswordChangedAt,
		&i.CreatedAt,
	)
	return i, err
}
