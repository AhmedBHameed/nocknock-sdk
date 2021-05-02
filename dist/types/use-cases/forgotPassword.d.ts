import { NockNock, ForgotPasswordInput } from '../models/NockNockModel';
declare function forgotPassword<T = any>(this: NockNock, data: ForgotPasswordInput): Promise<T>;
export default forgotPassword;
