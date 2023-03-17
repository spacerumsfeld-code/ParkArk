import { TripDataAccessObject } from './trip.dao';

export class TripService {
  private readonly dao = new TripDataAccessObject();
}
