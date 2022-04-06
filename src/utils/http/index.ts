import { Http } from './http';

const {
  VITE_HOST,
  VITE_API_PREFIX,
  VITE_API_VERSION
} = import.meta.env;

export const http = new Http({
  timeout: 10 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  baseURL: `${VITE_HOST}/${VITE_API_PREFIX}/${VITE_API_VERSION}`,
  requestOptions: {
    token: true
  }
});
