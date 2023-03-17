import { WeatherDataAccessObject } from './weather.dao';

export class WeatherService {
  private readonly dao = new WeatherDataAccessObject();
}
