// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.18.0

package db

import (
	"context"

	"github.com/google/uuid"
)

type Querier interface {
	CreateClinician(ctx context.Context, arg CreateClinicianParams) (Clinician, error)
	CreatePatient(ctx context.Context, arg CreatePatientParams) (Patient, error)
	CreateSession(ctx context.Context, arg CreateSessionParams) (Session, error)
	CreateUser(ctx context.Context, arg CreateUserParams) (User, error)
	CreateVerifyEmail(ctx context.Context, arg CreateVerifyEmailParams) (VerifyEmail, error)
	GetClinician(ctx context.Context, username string) (Clinician, error)
	GetPatient(ctx context.Context, username string) (Patient, error)
	GetSession(ctx context.Context, id uuid.UUID) (Session, error)
	GetUser(ctx context.Context, username string) (User, error)
	UpdateClinician(ctx context.Context, arg UpdateClinicianParams) (Clinician, error)
	UpdatePatient(ctx context.Context, arg UpdatePatientParams) (Patient, error)
	UpdateUser(ctx context.Context, arg UpdateUserParams) (User, error)
	UpdateVerifyEmail(ctx context.Context, arg UpdateVerifyEmailParams) (VerifyEmail, error)
}

var _ Querier = (*Queries)(nil)
