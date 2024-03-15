import { Prisma, ScheduleRequest } from '@prisma/client';
import customConfig from '../config/default';
import redisClient from '../utils/connectRedis';
import { signJwt } from '../utils/jwt';
import { prisma } from '../utils/prisma';

export const createScheduleRequest = async (input: Prisma.ScheduleRequestCreateInput) => {
  return (await prisma.scheduleRequest.create({
    data: input,
  })) as ScheduleRequest;
};

export const findScheduleRequest = async (
  where: Prisma.ScheduleRequestWhereInput,
  select?: Prisma.ScheduleRequestSelect
) => {
  return (await prisma.scheduleRequest.findMany({
    where,
    select,
  })) as ScheduleRequest[];
};

export const findUniqueScheduleRequest = async (
  where: Prisma.ScheduleRequestWhereUniqueInput,
  select?: Prisma.ScheduleRequestSelect
) => {
  return (await prisma.scheduleRequest.findUnique({
    where,
    select,
  })) as ScheduleRequest;
};

export const updateScheduleRequest = async (
  where: Prisma.ScheduleRequestWhereUniqueInput,
  data: Prisma.ScheduleRequestUpdateInput,
  select?: Prisma.ScheduleRequestSelect
) => {
  return (await prisma.scheduleRequest.update({ where, data, select })) as ScheduleRequest;
};

export const deleteScheduleRequest = async (
  where: Prisma.ScheduleRequestWhereUniqueInput,
  select?: Prisma.ScheduleRequestSelect
) => {
  return (await prisma.scheduleRequest.delete({ where, select })) as ScheduleRequest;
};

// export const signTokens = async (user: Prisma.ScheduleRequestCreateInput) => {
//   // 1. Create Session
//   redisClient.set(`${ScheduleRequest.id}`, JSON.stringify(ScheduleRequest), {
//     EX: customConfig.redisCacheExpiresIn * 60,
//   });

//   // 2. Create Access and Refresh tokens
//   const access_token = signJwt({ sub: ScheduleRequest.id }, 'accessTokenPrivateKey', {
//     expiresIn: `${customConfig.accessTokenExpiresIn}m`,
//   });

//   const refresh_token = signJwt({ sub: ScheduleRequest.id }, 'refreshTokenPrivateKey', {
//     expiresIn: `${customConfig.refreshTokenExpiresIn}m`,
//   });

//   return { access_token, refresh_token };
// };