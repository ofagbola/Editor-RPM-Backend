import { Prisma, UserSubscriptionRequest } from '@prisma/client';
import customConfig from '../config/default';
import redisClient from '../utils/connectRedis';
import { signJwt } from '../utils/jwt';
import { prisma } from '../utils/prisma';

export const createUserSubscriptionRequest = async (input: Prisma.UserSubscriptionRequestCreateInput) => {
  return (await prisma.userSubscriptionRequest.create({
    data: input,
  })) as UserSubscriptionRequest;
};

export const findUserSubscriptionRequest = async (
  where: Prisma.UserSubscriptionRequestWhereInput,
  select?: Prisma.UserSubscriptionRequestSelect
) => {
  return (await prisma.userSubscriptionRequest.findMany({
    where,
    select,
  })) as UserSubscriptionRequest[];
};

export const findUniqueUserSubscriptionRequest = async (
  where: Prisma.UserSubscriptionRequestWhereUniqueInput,
  select?: Prisma.UserSubscriptionRequestSelect
) => {
  return (await prisma.userSubscriptionRequest.findUnique({
    where,
    select,
  })) as UserSubscriptionRequest;
};

export const updateUserSubscriptionRequest = async (
  where: Prisma.UserSubscriptionRequestWhereUniqueInput,
  data: Prisma.UserSubscriptionRequestUpdateInput,
  select?: Prisma.UserSubscriptionRequestSelect
) => {
  return (await prisma.userSubscriptionRequest.update({ where, data, select })) as UserSubscriptionRequest;
};

export const deleteUserSubscriptionRequest = async (
  where: Prisma.UserSubscriptionRequestWhereUniqueInput,
  select?: Prisma.UserSubscriptionRequestSelect
) => {
  return (await prisma.userSubscriptionRequest.delete({ where, select })) as UserSubscriptionRequest;
};

// export const signTokens = async (user: Prisma.UserSubscriptionRequestCreateInput) => {
//   // 1. Create Session
//   redisClient.set(`${userSubscriptionRequest.id}`, JSON.stringify(userSubscriptionRequest), {
//     EX: customConfig.redisCacheExpiresIn * 60,
//   });

//   // 2. Create Access and Refresh tokens
//   const access_token = signJwt({ sub: userSubscriptionRequest.id }, 'accessTokenPrivateKey', {
//     expiresIn: `${customConfig.accessTokenExpiresIn}m`,
//   });

//   const refresh_token = signJwt({ sub: userSubscriptionRequest.id }, 'refreshTokenPrivateKey', {
//     expiresIn: `${customConfig.refreshTokenExpiresIn}m`,
//   });

//   return { access_token, refresh_token };
// };