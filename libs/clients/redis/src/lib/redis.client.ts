import { upstashRedisClient } from './upStashRedis.client';

export class RedisClient {
  private readonly client = upstashRedisClient;

  public async setKey(
    key: string,
    value: string,
    expiration?: number
  ): Promise<any> {
    let setOptions = {} as any;

    if (expiration) {
      setOptions = {
        ex: expiration,
      };
    }

    try {
      const data = await this.client.set(key, value, setOptions);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public async getKey(key: string): Promise<any> {
    try {
      const data = await this.client.get(key);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public async deleteKey(key: string): Promise<any> {
    try {
      const data = await this.client.del(key);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
