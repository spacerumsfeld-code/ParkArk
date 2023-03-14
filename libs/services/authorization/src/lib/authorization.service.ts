import { RedisClient } from '@park-ark/clients/redis';
import { UserRoleEnum } from './domain/index';

export class AuthorizationService {
  private readonly client = new RedisClient();

  public async setSession(sessionToken: string, userId: string) {
    try {
      await this.client.setKey(`session:${sessionToken}`, userId);
    } catch (e) {
      throw new Error(
        `Failed to set validSession in Authorization Service!, ${e}`
      );
    }

    return {
      message: 'SUCCESS',
      data: null,
    };
  }

  public async getSession(sessionId: string) {
    let validSession;
    try {
      validSession = await this.client.getKey(`session:${sessionId}`);
    } catch (e) {
      throw new Error(
        `Failed to get user session in Authorization Service!, ${e}`
      );
    }

    return {
      message: 'SUCCESS',
      data: validSession,
    };
  }

  /** remove user session */
  public async removeUserSession(userId: string) {
    try {
      await this.client.deleteKey(`${userId}-authorized}`);
    } catch (e) {
      throw new Error(
        `Failed to remove user session in Authorization Service!, ${e}`
      );
    }

    return {
      message: 'SUCCESS',
      data: null,
    };
  }

  public async setUserRole(userId: string, role = UserRoleEnum.basic) {
    try {
      await this.client.setKey(`${userId}-role}`, role);
    } catch (e) {
      throw new Error(
        `Failed to set user role in Authorization Service!, ${e}`
      );
    }

    return {
      message: 'SUCCESS',
      data: null,
    };
  }

  public async getUserRole(userId: string) {
    let role;
    try {
      role = await this.client.getKey(`${userId}-role}`);
    } catch (e) {
      throw new Error(
        `Failed to get user role in Authorization Service!, ${e}`
      );
    }

    return {
      message: 'SUCCESS',
      data: role,
    };
  }
}
