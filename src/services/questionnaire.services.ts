import { Prisma, Question } from '@prisma/client';
import customConfig from '../config/default';
import redisClient from '../utils/connectRedis';
import { signJwt } from '../utils/jwt';
import { prisma } from '../utils/prisma';

export const createQuestion = async (input: Prisma.QuestionCreateInput) => {
  return (await prisma.question.create({
    data: input,
  })) as Question;
};

export const findQuestion = async (
  where: Partial<Prisma.QuestionCreateInput>,
  select?: Prisma.QuestionSelect
) => {
  return (await prisma.question.findFirst({
    where,
    select,
  })) as Question;
};

export const findUniqueQuestion = async (
  where: Prisma.QuestionWhereUniqueInput,
  select?: Prisma.QuestionSelect
) => {
  return (await prisma.question.findUnique({
    where,
    select,
  })) as Question;
};

export const updateQuestion = async (
  where: Partial<Prisma.QuestionWhereUniqueInput>,
  data: Prisma.QuestionUpdateInput,
  select?: Prisma.QuestionSelect
) => {
  return (await prisma.question.update({ where, data, select })) as Question;
};

// export const signTokens = async (user: Prisma.QuestionCreateInput) => {
//   // 1. Create Session
//   redisClient.set(`${question.id}`, JSON.stringify(question), {
//     EX: customConfig.redisCacheExpiresIn * 60,
//   });

//   // 2. Create Access and Refresh tokens
//   const access_token = signJwt({ sub: question.id }, 'accessTokenPrivateKey', {
//     expiresIn: `${customConfig.accessTokenExpiresIn}m`,
//   });

//   const refresh_token = signJwt({ sub: question.id }, 'refreshTokenPrivateKey', {
//     expiresIn: `${customConfig.refreshTokenExpiresIn}m`,
//   });

//   return { access_token, refresh_token };
// };