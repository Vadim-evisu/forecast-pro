import { FetchFactory } from './open-weather-factory';
import { apiFetch } from './openWeatherApi';

const fetcherInstance = new FetchFactory(apiFetch);

export { fetcherInstance };
