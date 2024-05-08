import type { ApiFactoryBase } from '@/fetch-api/api-factory';
import type { JSONFetchOptions } from '@/fetch-api/open-weather-factory';
import type { ILocation } from '@/modules/location';

export default class RepoInstance {
  private api: ApiFactoryBase;
  constructor(api: ApiFactoryBase) {
    this.api = api;
  }

  getDirectLocation(options?: JSONFetchOptions) {
    return this.api.request<ILocation[]>('geo/1.0/direct', options);
  }
}