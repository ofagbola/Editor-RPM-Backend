import { Prisma, Questionnaire } from '@prisma/client';
import customConfig from '../config/default';
import redisClient from '../utils/connectRedis';
import { signJwt } from '../utils/jwt';
import { prisma } from '../utils/prisma';

export const createQuestionnaire = async (input: Prisma.QuestionnaireCreateInput) => {
  return (await prisma.questionnaire.create({
    data: input,
  })) as Questionnaire;
};

export const findQuestionnaire = async (
  where: Prisma.QuestionnaireWhereInput,
  select?: Prisma.QuestionnaireSelect
) => {
  return (await prisma.questionnaire.findMany({
    where,
    select,
  })) as Questionnaire[];
};

export const findUniqueQuestionnaire = async (
  where: Prisma.QuestionnaireWhereUniqueInput,
  select?: Prisma.QuestionnaireSelect
) => {
  return (await prisma.questionnaire.findUnique({
    where,
    select,
  })) as Questionnaire;
};

export const updateQuestionnaire = async (
  where: Prisma.QuestionnaireWhereUniqueInput,
  data: Prisma.QuestionnaireUpdateInput,
  select?: Prisma.QuestionnaireSelect
) => {
  return (await prisma.questionnaire.update({ where, data, select })) as Questionnaire;
};

export const deleteQuestionnaire = async (
  where: Prisma.QuestionnaireWhereUniqueInput,
  select?: Prisma.QuestionnaireSelect
) => {
  return (await prisma.questionnaire.delete({ where, select })) as Questionnaire;
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