import { UserDataAccessObject } from './user.dao';

export class UserService {
  private readonly dao = new UserDataAccessObject();
}
