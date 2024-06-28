CREATE TABLE "users" (
  "username" varchar PRIMARY KEY,
  "email" varchar UNIQUE NOT NULL,
  "role" varchar NOT NULL DEFAULT 'patient',
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "dob" varchar NOT NULL,
  "gender" varchar NOT NULL,
  "location" varchar NOT NULL,
  "languages" varchar[] NOT NULL,
  "ethnicity" varchar NOT NULL,
  "phone_number" varchar NOT NULL,
  "hashed_password" varchar NOT NULL,
  "is_email_verified" bool NOT NULL DEFAULT false,
  "is_user_onboarded" bool NOT NULL DEFAULT false,
  "password_changed_at" timestamptz NOT NULL DEFAULT '0001-01-01 00:00:00Z',
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "patients" (
  "id" uuid PRIMARY KEY,
  "username" varchar NOT NULL,
  "medical_history" varchar[] NOT NULL,
  "provider" varchar NOT NULL,
  "out_of_network_expenses" varchar NOT NULL,
  "out_of_pocket_expenses" varchar NOT NULL,
  "co_pay" varchar NOT NULL,
  "image" varchar NOT NULL DEFAULT '',
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "invitations" (
  "id" uuid PRIMARY KEY,
  "sender" varchar NOT NULL,
  "recepient_email" varchar NOT NULL,
  "is_accepted" bool NOT NULL DEFAULT false,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "clinicians" (
  "id" uuid PRIMARY KEY,
  "username" varchar NOT NULL,
  "credentials" varchar[] NOT NULL,
  "specialities" varchar[] NOT NULL,
  "clinic_name" varchar NOT NULL,
  "clinic_id" varchar NOT NULL,
  "image" varchar NOT NULL DEFAULT '',
  "accept_patient" boolean NOT NULL DEFAULT false,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "sessions" (
  "id" uuid PRIMARY KEY,
  "username" varchar NOT NULL,
  "refresh_token" varchar NOT NULL,
  "user_agent" varchar NOT NULL,
  "client_ip" varchar NOT NULL,
  "is_blocked" boolean NOT NULL DEFAULT false,
  "expires_at" timestamptz NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "verify_emails" (
  "id" bigserial PRIMARY KEY,
  "username" varchar NOT NULL,
  "email" varchar NOT NULL,
  "secret_code" bigint NOT NULL,
  "is_used" boolean NOT NULL DEFAULT false,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "expired_at" timestamptz NOT NULL DEFAULT (now() + interval '15 minutes')
);

CREATE TABLE "verify_forgot_passwords" (
  "id" bigserial PRIMARY KEY,
  "username" varchar NOT NULL,
  "email" varchar NOT NULL,
  "secret_code" bigint NOT NULL,
  "is_used" boolean NOT NULL DEFAULT false,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "expired_at" timestamptz NOT NULL DEFAULT (now() + interval '15 minutes')
);

ALTER TABLE "patients" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");

ALTER TABLE "invitations" ADD FOREIGN KEY ("sender") REFERENCES "users" ("username");

ALTER TABLE "clinicians" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");

ALTER TABLE "sessions" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");

ALTER TABLE "verify_emails" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");

ALTER TABLE "verify_forgot_passwords" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");
