import * as redis from 'redis';
import logger from './logger';

export let client: any = null;

export async function startRedis() {
  try {
    client = await redis
      .createClient({
        url: 'redis://auth_redis:6379',
      })
      .on('error', (err: any) => logger.error(`Redis failed to start ${err}`))
      .connect();
  } catch (error: any) {
    logger.error('Redis failed to start');
  }
}

export async function redisSet(key: string, value: string) {
  await client?.set(key, value);
}

export async function redisGet(key: string) {
  return client?.get(key);
}
