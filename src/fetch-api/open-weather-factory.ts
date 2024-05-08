import type {
  $Fetch,
  ResponseType,
  FetchRequest,
  FetchOptions,
  MappedResponseType,
  FetchResponse,
  FetchError
} from 'ofetch';
import { apiIdRequestInterceptor } from './fetch-interceptors';
import type { ApiFactoryBase } from './api-factory';

type JSONFetchOptions = FetchOptions<'json'>;

class FetchFactory implements ApiFactoryBase {
  private http: $Fetch;
  constructor(http: $Fetch) {
    this.http = http;
  }

  request<T, R extends ResponseType = 'json'>
    (request: FetchRequest, options?: FetchOptions<R>):
      Promise<MappedResponseType<R, T>> {
    
    const config: typeof options = 
      { ...options, onRequest(_context) {
          apiIdRequestInterceptor(_context);
        }
      };
    return this.http(request, config);
  }
  
  requestNoAuth<T, R extends ResponseType = 'json'>
    (request: FetchRequest, options?: FetchOptions<R>):
      Promise<MappedResponseType<R, T>> {
    return this.http(request, options);
  }

  requestRaw<T, R extends ResponseType = 'json'>
    (request: FetchRequest, options?: FetchOptions<R>):
      Promise<FetchResponse<MappedResponseType<R, T>>> {
    return this.http.raw(request, options);
  }
}
export type { JSONFetchOptions, FetchError };
export { FetchFactory };