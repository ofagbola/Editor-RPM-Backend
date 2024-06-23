// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0

package db

import (
	"time"

	"github.com/google/uuid"
)

type Clinician struct {
	ID            uuid.UUID `json:"id"`
	Username      string    `json:"username"`
	Credentials   []string  `json:"credentials"`
	Specialities  []string  `json:"specialities"`
	ClinicName    string    `json:"clinic_name"`
	ClinicID      string    `json:"clinic_id"`
	Image         string    `json:"image"`
	AcceptPatient bool      `json:"accept_patient"`
	CreatedAt     time.Time `json:"created_at"`
}

type Patient struct {
	ID                   uuid.UUID `json:"id"`
	Username             string    `json:"username"`
	MedicalHistory       []string  `json:"medical_history"`
	Provider             string    `json:"provider"`
	OutOfNetworkExpenses string    `json:"out_of_network_expenses"`
	OutOfPocketExpenses  string    `json:"out_of_pocket_expenses"`
	CoPay                string    `json:"co_pay"`
	Image                string    `json:"image"`
	CreatedAt            time.Time `json:"created_at"`
}

type Session struct {
	ID           uuid.UUID `json:"id"`
	Username     string    `json:"username"`
	RefreshToken string    `json:"refresh_token"`
	UserAgent    string    `json:"user_agent"`
	ClientIp     string    `json:"client_ip"`
	IsBlocked    bool      `json:"is_blocked"`
	ExpiresAt    time.Time `json:"expires_at"`
	CreatedAt    time.Time `json:"created_at"`
}

type User struct {
	Username          string    `json:"username"`
	Email             string    `json:"email"`
	Role              string    `json:"role"`
	FirstName         string    `json:"first_name"`
	LastName          string    `json:"last_name"`
	Dob               string    `json:"dob"`
	Gender            string    `json:"gender"`
	Location          string    `json:"location"`
	Languages         []string  `json:"languages"`
	Ethnicity         string    `json:"ethnicity"`
	PhoneNumber       string    `json:"phone_number"`
	HashedPassword    string    `json:"hashed_password"`
	IsEmailVerified   bool      `json:"is_email_verified"`
	PasswordChangedAt time.Time `json:"password_changed_at"`
	CreatedAt         time.Time `json:"created_at"`
}

type VerifyEmail struct {
	ID         int64     `json:"id"`
	Username   string    `json:"username"`
	Email      string    `json:"email"`
	SecretCode int64     `json:"secret_code"`
	IsUsed     bool      `json:"is_used"`
	CreatedAt  time.Time `json:"created_at"`
	ExpiredAt  time.Time `json:"expired_at"`
}

type VerifyForgotPassword struct {
	ID         int64     `json:"id"`
	Username   string    `json:"username"`
	Email      string    `json:"email"`
	SecretCode int64     `json:"secret_code"`
	IsUsed     bool      `json:"is_used"`
	CreatedAt  time.Time `json:"created_at"`
	ExpiredAt  time.Time `json:"expired_at"`
}
