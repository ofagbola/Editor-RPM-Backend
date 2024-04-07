CREATE TABLE "questions" (
  "code" varchar PRIMARY KEY,
  "title" varchar NOT NULL,
  "input_field" varchar NOT NULL,
  "options" varchar[] NOT NULL,
  "created_by" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "question_configs" (
  "id" bigserial PRIMARY KEY,
  "code" varchar UNIQUE NOT NULL,
  "title" varchar NOT NULL,
  "description" varchar NOT NULL,
  "questions" varchar[] NOT NULL,
  "created_by" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "send_question_configs" (
  "id" bigserial PRIMARY KEY,
  "question_config_id" bigint NOT NULL,
  "recipient" varchar NOT NULL,
  "sender" varchar NOT NULL,
  "submitted" bool DEFAULT false,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "response_question_configs" (
  "id" bigserial PRIMARY KEY,
  "question_config_id" bigint NOT NULL,
  "response" varchar[] NOT NULL,
  "patient" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE INDEX ON "questions" ("created_by");

CREATE INDEX ON "question_configs" ("created_by");

CREATE INDEX ON "send_question_configs" ("recipient");

CREATE INDEX ON "send_question_configs" ("sender");

CREATE INDEX ON "send_question_configs" ("recipient", "sender");

ALTER TABLE "send_question_configs" ADD FOREIGN KEY ("question_config_id") REFERENCES "question_configs" ("id");

ALTER TABLE "response_question_configs" ADD FOREIGN KEY ("question_config_id") REFERENCES "send_question_configs" ("id");

-- ALTER TABLE "questions" ADD FOREIGN KEY ("code") REFERENCES "question_configs" ("questions");