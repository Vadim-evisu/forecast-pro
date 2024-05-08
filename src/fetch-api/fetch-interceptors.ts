import type { FetchContext } from 'ofetch';

const apiIdRequestInterceptor = (context: FetchContext) => {
  const query = {
    ...context.options.query,
    appid: import.meta.env.VITE_API_KEY
  };
  context.options.query = query;
  return context;
};

export { apiIdRequestInterceptor };