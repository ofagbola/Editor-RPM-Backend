CREATE TABLE "schedules" (
  "id" bigserial PRIMARY KEY,
  "recepient" varchar NOT NULL,
  "initiator" varchar NOT NULL,
  "time_slot" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE INDEX ON "schedules" ("initiator");

CREATE INDEX ON "schedules" ("recepient");
