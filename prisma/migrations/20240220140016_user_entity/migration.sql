-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "question" VARCHAR(255) NOT NULL,
    "answers" VARCHAR(255)[],
    "type" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);
