import { Prisma, SubscriptionRequest } from '@prisma/client';
import customConfig from '../config/default';
import redisClient from '../utils/connectRedis';
import { signJwt } from '../utils/jwt';
import { prisma } from '../utils/prisma';

export const createSubscriptionRequest = async (input: Prisma.SubscriptionRequestCreateInput) => {
  return (await prisma.subscriptionRequest.create({
    data: input,
  })) as SubscriptionRequest;
};

export const findSubscriptionRequest = async (
  where: Prisma.SubscriptionRequestWhereInput,
  select?: Prisma.SubscriptionRequestSelect
) => {
  return (await prisma.subscriptionRequest.findMany({
    where,
    select,
  })) as SubscriptionRequest[];
};

export const findUniqueSubscriptionRequest = async (
  where: Prisma.SubscriptionRequestWhereUniqueInput,
  select?: Prisma.SubscriptionRequestSelect
) => {
  return (await prisma.subscriptionRequest.findUnique({
    where,
    select,
  })) as SubscriptionRequest;
};

export const updateSubscriptionRequest = async (
  where: Prisma.SubscriptionRequestWhereUniqueInput,
  data: Prisma.SubscriptionRequestUpdateInput,
  select?: Prisma.SubscriptionRequestSelect
) => {
  return (await prisma.subscriptionRequest.update({ where, data, select })) as SubscriptionRequest;
};

export const deleteSubscriptionRequest = async (
  where: Prisma.SubscriptionRequestWhereUniqueInput,
  select?: Prisma.SubscriptionRequestSelect
) => {
  return (await prisma.subscriptionRequest.delete({ where, select })) as SubscriptionRequest;
};

// export const signTokens = async (user: Prisma.SubscriptionRequestCreateInput) => {
//   // 1. Create Session
//   redisClient.set(`${subscriptionRequest.id}`, JSON.stringify(subscriptionRequest), {
//     EX: customConfig.redisCacheExpiresIn * 60,
//   });

//   // 2. Create Access and Refresh tokens
//   const access_token = signJwt({ sub: subscriptionRequest.id }, 'accessTokenPrivateKey', {
//     expiresIn: `${customConfig.accessTokenExpiresIn}m`,
//   });

//   const refresh_token = signJwt({ sub: subscriptionRequest.id }, 'refreshTokenPrivateKey', {
//     expiresIn: `${customConfig.refreshTokenExpiresIn}m`,
//   });

//   return { access_token, refresh_token };
// };