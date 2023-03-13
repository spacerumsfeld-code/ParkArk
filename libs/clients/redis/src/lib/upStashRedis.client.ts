import { Redis } from '@upstash/redis';

export const upstashRedisClient = new Redis({
  url: process.env['UPSTASH_REDIS_URL'] as string,
  token: process.env['UPSTASH_REDIS_PASSWORD'] as string,
});
