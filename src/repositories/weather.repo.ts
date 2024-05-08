import type { IWeatherDataCurrent } from '@/modules/weather';
import type { ApiFactoryBase } from '@/fetch-api/api-factory';

type IDestination = { lat: number, lon: number };

export default class RepoInstance {
  private api: ApiFactoryBase;
  constructor(api: ApiFactoryBase) {
    this.api = api;
  }

  getWeatherCurrent(destination: IDestination) {
    const options = {
      query: {
        ...destination,
        units: 'metric',
        exclude: 'daily,hourly,minutely,alerts'
      }
    };
    return this.api.request<IWeatherDataCurrent>('data/3.0/onecall', options);
  }
}