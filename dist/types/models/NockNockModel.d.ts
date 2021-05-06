import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
export declare type NockNock = {
    _httpClient: AxiosInstance;
    _config?: AxiosRequestConfig;
    auth: Auth;
    init: (config: AxiosRequestConfig) => void;
};
export interface LoginInput {
    username: string;
    password: string;
}
export interface SignupInput {
    email: string;
    password: string;
    name: {
        first: string;
        last: string;
    };
}
export interface ForgotPasswordInput {
    email: string;
}
export interface ResetPasswordInput {
    newPassword: string;
    userId: string;
    verificationId: string;
}
export declare type LoginFun = <T>(data: LoginInput) => Promise<AxiosResponse<T>>;
export declare type SignupFun = <T>(data: SignupInput) => Promise<AxiosResponse<T>>;
export declare type ForgotPasswordFun = <T>(data: ForgotPasswordInput) => Promise<AxiosResponse<T>>;
export declare type ResetPasswordFun = <T>(data: ResetPasswordInput) => Promise<AxiosResponse<T>>;
export declare type LogoutFun = <T>() => Promise<AxiosResponse<T>>;
export interface Auth {
    login: LoginFun;
    signup: SignupFun;
    forgotPassword: ForgotPasswordFun;
    resetPassword: ResetPasswordFun;
    logout: LogoutFun;
}
