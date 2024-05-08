import { ofetch } from 'ofetch';

const apiFetch = ofetch.create({ baseURL: import.meta.env.VITE_API_URL });

export { apiFetch };