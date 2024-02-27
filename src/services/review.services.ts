import { Prisma, ReviewRequest } from '@prisma/client';
import customConfig from '../config/default';
import redisClient from '../utils/connectRedis';
import { signJwt } from '../utils/jwt';
import { prisma } from '../utils/prisma';

export const createReviewRequest = async (input: Prisma.ReviewRequestCreateInput) => {
  return (await prisma.reviewRequest.create({
    data: input,
  })) as ReviewRequest;
};

export const findReviewRequest = async (
  where: Prisma.ReviewRequestWhereInput,
  select?: Prisma.ReviewRequestSelect
) => {
  return (await prisma.reviewRequest.findMany({
    where,
    select,
  })) as ReviewRequest[];
};

export const findUniqueReviewRequest = async (
  where: Prisma.ReviewRequestWhereUniqueInput,
  select?: Prisma.ReviewRequestSelect
) => {
  return (await prisma.reviewRequest.findUnique({
    where,
    select,
  })) as ReviewRequest;
};

export const updateReviewRequest = async (
  where: Prisma.ReviewRequestWhereUniqueInput,
  data: Prisma.ReviewRequestUpdateInput,
  select?: Prisma.ReviewRequestSelect
) => {
  return (await prisma.reviewRequest.update({ where, data, select })) as ReviewRequest;
};

export const deleteReviewRequest = async (
  where: Prisma.ReviewRequestWhereUniqueInput,
  select?: Prisma.ReviewRequestSelect
) => {
  return (await prisma.reviewRequest.delete({ where, select })) as ReviewRequest;
};

// export const signTokens = async (user: Prisma.ReviewRequestCreateInput) => {
//   // 1. Create Session
//   redisClient.set(`${ReviewRequest.id}`, JSON.stringify(ReviewRequest), {
//     EX: customConfig.redisCacheExpiresIn * 60,
//   });

//   // 2. Create Access and Refresh tokens
//   const access_token = signJwt({ sub: ReviewRequest.id }, 'accessTokenPrivateKey', {
//     expiresIn: `${customConfig.accessTokenExpiresIn}m`,
//   });

//   const refresh_token = signJwt({ sub: ReviewRequest.id }, 'refreshTokenPrivateKey', {
//     expiresIn: `${customConfig.refreshTokenExpiresIn}m`,
//   });

//   return { access_token, refresh_token };
// };