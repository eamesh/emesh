import { AxiosRequestConfig } from 'axios';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  requestOptions?: RequestOptions;
}

export interface RequestOptions {
  token?: boolean;
}

export interface Result<T = unknown> {
  [key: string]: T
}
