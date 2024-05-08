import { fetcherInstance } from '@/fetch-api';
import GeocodingRepo from './geocoding.repo';
import WearherRepo from './weather.repo';

interface IRepoModules {
  geocoding: GeocodingRepo;
  weather: WearherRepo;
}

const fetchFactory = fetcherInstance;

const apiRepository: IRepoModules = {
  geocoding: new GeocodingRepo(fetchFactory),
  weather: new WearherRepo(fetchFactory),
};

export { apiRepository };