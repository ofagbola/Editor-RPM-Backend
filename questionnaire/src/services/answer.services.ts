import { Prisma, Answer } from '@prisma/client';
import customConfig from '../config/default';
import redisClient from '../utils/connectRedis';
import { signJwt } from '../utils/jwt';
import { prisma } from '../utils/prisma';

export const createAnswer = async (input: Prisma.AnswerCreateInput) => {
  return (await prisma.answer.create({
    data: input,
  })) as Answer;
};

export const findAnswer = async (
  where: Prisma.AnswerWhereInput,
  select?: Prisma.AnswerSelect
) => {
  return (await prisma.answer.findMany({
    where,
    select,
  })) as Answer[];
};

export const findUniqueAnswer = async (
  where: Prisma.AnswerWhereUniqueInput,
  select?: Prisma.AnswerSelect
) => {
  return (await prisma.answer.findUnique({
    where,
    select,
  })) as Answer;
};

export const updateAnswer = async (
  where: Prisma.AnswerWhereUniqueInput,
  data: Prisma.AnswerUpdateInput,
  select?: Prisma.AnswerSelect
) => {
  return (await prisma.answer.update({ where, data, select })) as Answer;
};

export const deleteAnswer = async (
  where: Prisma.AnswerWhereUniqueInput,
  select?: Prisma.AnswerSelect
) => {
  return (await prisma.answer.delete({ where, select })) as Answer;
};

// export const signTokens = async (user: Prisma.AnswerCreateInput) => {
//   // 1. Create Session
//   redisClient.set(`${Answer.id}`, JSON.stringify(Answer), {
//     EX: customConfig.redisCacheExpiresIn * 60,
//   });

//   // 2. Create Access and Refresh tokens
//   const access_token = signJwt({ sub: Answer.id }, 'accessTokenPrivateKey', {
//     expiresIn: `${customConfig.accessTokenExpiresIn}m`,
//   });

//   const refresh_token = signJwt({ sub: Answer.id }, 'refreshTokenPrivateKey', {
//     expiresIn: `${customConfig.refreshTokenExpiresIn}m`,
//   });

//   return { access_token, refresh_token };
// };