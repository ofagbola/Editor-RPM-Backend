-- CreateTable
CREATE TABLE "answers" (
    "id" TEXT NOT NULL,
    "question" UUID NOT NULL,
    "answer" SMALLINT NOT NULL,
    "user" UUID NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);
