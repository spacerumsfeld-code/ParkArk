import { upstashRedisClient } from './upStashRedis.client';

export class RedisClient {
  private readonly client = upstashRedisClient;

  async setKey(key: string, value: string): Promise<any> {
    try {
      const data = await this.client.set(key, value);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getKey(key: string): Promise<any> {
    try {
      const data = await this.client.get(key);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteKey(key: string): Promise<any> {
    try {
      const data = await this.client.del(key);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
