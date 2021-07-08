import { NockNock, ForgotPasswordInput } from '../models/NockNockModel';
declare const forgotPassword: (config: NockNock) => <T = any>(data: ForgotPasswordInput) => Promise<T>;
export default forgotPassword;
