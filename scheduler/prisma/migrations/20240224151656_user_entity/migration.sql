/*
  Warnings:

  - You are about to drop the `ReviewRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ScheduleRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubscriptionRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSubscriptionRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ReviewRequest";

-- DropTable
DROP TABLE "ScheduleRequest";

-- DropTable
DROP TABLE "SubscriptionRequest";

-- DropTable
DROP TABLE "UserSubscriptionRequest";

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "amount" SMALLINT NOT NULL,
    "currency" VARCHAR(255) NOT NULL,
    "discount" SMALLINT NOT NULL,
    "billing" VARCHAR(255)[],
    "paymentMethod" VARCHAR(255)[],
    "benefits" JSON[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userSubscriptions" (
    "id" TEXT NOT NULL,
    "subscriptionId" VARCHAR(255) NOT NULL,
    "userId" VARCHAR(255) NOT NULL,
    "paid" INTEGER NOT NULL,
    "outstanding" INTEGER NOT NULL,
    "discount" SMALLINT NOT NULL,
    "billing" VARCHAR(255) NOT NULL,
    "paymentMethod" VARCHAR(255) NOT NULL,
    "paymentInfo" JSON NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userSubscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "schedule" JSON NOT NULL,
    "reschedule" JSON[],
    "userSubscriptionId" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL,
    "sessionId" VARCHAR(255) NOT NULL,
    "doctorId" VARCHAR(255) NOT NULL,
    "rating" SMALLINT NOT NULL,
    "review" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);
