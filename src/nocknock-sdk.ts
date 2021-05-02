// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
  
  import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
  import {Auth, LoginFun, NockNockConfiguration, Middleware} from './models/NockNockModel';
  import login from './use-cases/login';
  
  class NockNock {
    _httpClient!: AxiosInstance;
    _middleware!: Middleware | undefined;
    _config!: AxiosRequestConfig | undefined;
    public auth: Auth = {
      login: login.bind(this) as LoginFun,
    };
  
    init(options?: NockNockConfiguration): void {
      this._config = options?.config;
      if (!this._config?.baseURL) throw new Error('No base url provided! Please call init and pass some configuration');
  
      if (options) {
        if (options.middleware) {
          this._httpClient = options.middleware();
        } else {
          this._httpClient = axios.create({
            ...this._config,
            withCredentials: !!options.config?.withCredentials,
          });
        }
      }
    }
  }
  
  export default new NockNock();