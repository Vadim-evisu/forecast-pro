interface ApiFactoryBase {
  request<T>(request: string | Request, options?: unknown): Promise<T>;
  requestNoAuth<T>(request: string | Request, options?: unknown): Promise<T>;
  requestRaw(request: string | Request, options?: unknown): 
    Promise<Response>;
}

export type { ApiFactoryBase };