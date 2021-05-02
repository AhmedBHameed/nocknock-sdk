// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import axios, { AxiosRequestConfig } from 'axios'
import {
  Auth,
  LoginFun,
  SignupFun,
  NockNockConfiguration,
  Middleware,
  ForgotPasswordFun,
  ResetPasswordFun,
  LogoutFun
} from './models/NockNockModel'
import forgotPassword from './use-cases/forgotPassword'
import login from './use-cases/login'
import logout from './use-cases/logout'
import resetPassword from './use-cases/resetPassword'
import signup from './use-cases/signup'

class NockNock {
  _httpClient!: any
  _middleware!: Middleware | undefined
  _config!: AxiosRequestConfig | undefined
  public auth: Auth = {
    login: login.bind(this) as LoginFun,
    signup: signup.bind(this) as SignupFun,
    forgotPassword: forgotPassword.bind(this) as ForgotPasswordFun,
    resetPassword: resetPassword.bind(this) as ResetPasswordFun,
    logout: logout.bind(this) as LogoutFun
  }

  init(options: NockNockConfiguration): void {
    this._config = options.config
    if (!this._config.baseURL)
      throw new Error('No base url provided! Please call init and pass some configuration')

    if (options.middleware) {
      this._httpClient = options.middleware
    } else {
      this._httpClient = axios.create({
        ...this._config,
        withCredentials: !!options.config.withCredentials
      })
    }
  }
}

export default new NockNock()
