CREATE TABLE "questions" (
  "id" bigserial PRIMARY KEY,
  "title" varchar NOT NULL,
  "input_field" varchar NOT NULL,
  "options" varchar NOT NULL,
  "created_by" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "question_configs" (
  "id" bigserial PRIMARY KEY,
  "title" varchar NOT NULL,
  "description" varchar NOT NULL,
  "questions" int[],
  "created_by" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);