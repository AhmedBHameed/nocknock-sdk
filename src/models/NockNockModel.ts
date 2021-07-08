import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export type NockNock = {
  _httpClient: AxiosInstance
  _config?: AxiosRequestConfig
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
  newPassword: string
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
