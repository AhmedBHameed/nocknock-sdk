import { LoginInput, NockNock } from '../models/NockNockModel';
declare const login: (config: NockNock) => <T = any>(userData: LoginInput) => Promise<T>;
export default login;
