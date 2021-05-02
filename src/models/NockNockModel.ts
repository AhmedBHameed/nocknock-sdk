import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

export type Middleware = () => AxiosInstance;

export interface NockNockConfiguration {
  middleware?: Middleware;
  config?: AxiosRequestConfig;
}

export type NockNock = {
  _httpClient: AxiosInstance;
  _middleware?: Middleware;
  _config?: AxiosRequestConfig;
  auth: Auth;
  init: (options?: NockNockConfiguration) => void;
};

export type LoginFun = <T>(username: string, password: string) => Promise<AxiosResponse<T>>;

export interface Auth {
  login: LoginFun;
}
