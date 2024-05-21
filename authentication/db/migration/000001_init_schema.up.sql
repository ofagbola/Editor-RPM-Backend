CREATE TABLE "users" (
  "email" varchar UNIQUE NOT NULL,
  "username" varchar PRIMARY KEY,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "dob" date,
  "gender" varchar NOT NULL,
  "location" varchar NOT NULL,
  "language" varchar NOT NULL,
  "ethnicity" varchar NOT NULL,
  "is_email_verified" boolean NOT NULL DEFAULT false,
  "password_changed_at" timestamptz NOT NULL DEFAULT '0001-01-01 00:00:00Z',
  "role" varchar NOT NULL DEFAULT 'patient',
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "patient_insurance" (
  "id" uuid PRIMARY KEY,
  "username" varchar NOT NULL,
  "medical_history" varchar[] NOT NULL,
  "provider" varchar NOT NULL,
  "out_of_network_expenses" varchar NOT NULL,
  "out_of_pocket_expenses" varchar NOT NULL,
  "co_pay" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "clinician" (
  "id" uuid PRIMARY KEY,
  "username" varchar NOT NULL,
  "credentials" varchar[] NOT NULL,
  "specialties" varchar[] NOT NULL,
  "clinic_name" varchar NOT NULL,
  "clinic_id" varchar NOT NULL,
  "image" varchar,
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
  "id" uuid PRIMARY KEY,
  "username" varchar NOT NULL,
  "refresh_token" varchar NOT NULL,
  "user_agent" varchar NOT NULL,
  "client_ip" varchar NOT NULL,
  "is_blocked" boolean NOT NULL DEFAULT false,
  "expires_at" timestamptz NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

ALTER TABLE "patient_insurance" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");

ALTER TABLE "clinician" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");

ALTER TABLE "sessions" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");

ALTER TABLE "verify_emails" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");
