import { NockNock } from '../models/NockNockModel';
declare const logout: (config: NockNock) => <T = any>(username: string, password: string) => Promise<T>;
export default logout;
