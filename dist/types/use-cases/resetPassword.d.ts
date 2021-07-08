import { NockNock, ResetPasswordInput } from '../models/NockNockModel';
declare const resetPassword: (config: NockNock) => <T = any>(data: ResetPasswordInput) => Promise<T>;
export default resetPassword;
