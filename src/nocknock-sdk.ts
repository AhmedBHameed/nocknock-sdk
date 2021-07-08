// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
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

export function init(config: AxiosRequestConfig) {
  let _config: AxiosRequestConfig
  let _httpClient: AxiosInstance

  _config = config
  if (!_config.baseURL) {
    throw new Error('No base url provided! Please call init and pass some configuration')
  }

  _httpClient = axios.create({
    ..._config,
    withCredentials: !!config.withCredentials
  })

  const auth: Auth = {
    login: login({ _httpClient, _config }) as LoginFun,
    signup: signup({ _httpClient, _config }) as SignupFun,
    forgotPassword: forgotPassword({ _httpClient, _config }) as ForgotPasswordFun,
    resetPassword: resetPassword({ _httpClient, _config }) as ResetPasswordFun,
    logout: logout({ _httpClient, _config }) as LogoutFun
  }

  return auth
}
