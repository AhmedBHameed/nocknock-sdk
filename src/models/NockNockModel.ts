import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export type Middleware = () => AxiosInstance

export interface NockNockConfiguration {
  middleware?: Middleware
  config?: AxiosRequestConfig
}

export type NockNock = {
  _httpClient: AxiosInstance
  _middleware?: Middleware
  _config?: AxiosRequestConfig
  auth: Auth
  init: (options?: NockNockConfiguration) => void
}

export interface LoginInput {
  username: string
  password: string
}

export interface SignupInput {
  email: string
  password: string
  name: {
    first: string
    last: string
  }
}

export interface ForgotPasswordInput {
  email: string
}

export interface ResetPasswordInput {
  password: string
  userId: string
  verificationId: string
}

export type LoginFun = <T>(data: LoginInput) => Promise<AxiosResponse<T>>
export type SignupFun = <T>(data: SignupInput) => Promise<AxiosResponse<T>>
export type ForgotPasswordFun = <T>(data: ForgotPasswordInput) => Promise<AxiosResponse<T>>
export type ResetPasswordFun = <T>(data: ResetPasswordInput) => Promise<AxiosResponse<T>>
export type LogoutFun = <T>() => Promise<AxiosResponse<T>>
export interface Auth {
  login: LoginFun
  signup: SignupFun
  forgotPassword: ForgotPasswordFun
  resetPassword: ResetPasswordFun
  logout: LogoutFun
}
