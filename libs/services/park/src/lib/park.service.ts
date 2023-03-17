import { ParkDataAccessObject } from './park.dao';

// no pun intended =)
export class ParkService {
  private readonly dao = new ParkDataAccessObject();
}
