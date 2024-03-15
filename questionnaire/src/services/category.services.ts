import { Prisma, Categories } from '@prisma/client';
import customConfig from '../config/default';
import redisClient from '../utils/connectRedis';
import { signJwt } from '../utils/jwt';
import { prisma } from '../utils/prisma';

export const createCategory = async (input: Prisma.CategoriesCreateInput) => {
  return (await prisma.categories.create({
    data: input,
  })) as Categories;
};

export const findCategory = async (
  where: Prisma.CategoriesWhereInput,
  select?: Prisma.CategoriesSelect
) => {
  return (await prisma.categories.findMany({
    where,
    select,
  })) as Categories[];
};

export const findUniqueCategory = async (
  where: Prisma.CategoriesWhereUniqueInput,
  select?: Prisma.CategoriesSelect
) => {
  return (await prisma.categories.findUnique({
    where,
    select,
  })) as Categories;
};

export const updateCategory = async (
  where: Prisma.CategoriesWhereUniqueInput,
  data: Prisma.CategoriesUpdateInput,
  select?: Prisma.CategoriesSelect
) => {
  return (await prisma.categories.update({ where, data, select })) as Categories;
};

export const deleteCategory = async (
  where: Prisma.CategoriesWhereUniqueInput,
  select?: Prisma.CategoriesSelect
) => {
  return (await prisma.categories.delete({ where, select })) as Categories;
};

// export const signTokens = async (user: Prisma.CategoriesCreateInput) => {
//   // 1. Create Session
//   redisClient.set(`${Categories.id}`, JSON.stringify(Categories), {
//     EX: customConfig.redisCacheExpiresIn * 60,
//   });

//   // 2. Create Access and Refresh tokens
//   const access_token = signJwt({ sub: Categories.id }, 'accessTokenPrivateKey', {
//     expiresIn: `${customConfig.accessTokenExpiresIn}m`,
//   });

//   const refresh_token = signJwt({ sub: Categories.id }, 'refreshTokenPrivateKey', {
//     expiresIn: `${customConfig.refreshTokenExpiresIn}m`,
//   });

//   return { access_token, refresh_token };
// };