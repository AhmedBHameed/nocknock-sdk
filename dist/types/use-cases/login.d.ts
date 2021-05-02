import { LoginInput, NockNock } from '../models/NockNockModel';
declare function login<T = any>(this: NockNock, userData: LoginInput): Promise<T>;
export default login;
