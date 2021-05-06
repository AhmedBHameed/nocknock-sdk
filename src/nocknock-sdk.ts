// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import axios, { AxiosRequestConfig } from 'axios'
import {
  Auth,
  LoginFun,
  SignupFun,
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
  _config!: AxiosRequestConfig | undefined
  public auth: Auth = {
    login: login.bind(this) as LoginFun,
    signup: signup.bind(this) as SignupFun,
    forgotPassword: forgotPassword.bind(this) as ForgotPasswordFun,
    resetPassword: resetPassword.bind(this) as ResetPasswordFun,
    logout: logout.bind(this) as LogoutFun
  }

  init(config: AxiosRequestConfig): void {
    this._config = config
    if (!this._config.baseURL) {
      throw new Error('No base url provided! Please call init and pass some configuration')
    }

    this._httpClient = axios.create({
      ...this._config,
      withCredentials: !!config.withCredentials
    })
  }
}

export const nockNock = new NockNock()
export default nockNock
