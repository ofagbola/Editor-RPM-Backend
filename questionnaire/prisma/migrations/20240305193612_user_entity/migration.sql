-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "question" VARCHAR(255) NOT NULL,
    "answers" VARCHAR(255)[],
    "type" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "users" JSON[],
    "status" VARCHAR(255) NOT NULL DEFAULT 'active',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questionnaires" (
    "id" TEXT NOT NULL,
    "questions" VARCHAR(255)[],
    "category" VARCHAR(255) NOT NULL,
    "users" JSON[],
    "status" VARCHAR(255) NOT NULL DEFAULT 'active',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questionnaires_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" TEXT NOT NULL,
    "questionnaire" VARCHAR(255) NOT NULL,
    "question" VARCHAR(255) NOT NULL,
    "answer" VARCHAR(255)[],
    "user" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL DEFAULT 'active',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "users" JSON[],
    "status" VARCHAR(255) NOT NULL DEFAULT 'active',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);
