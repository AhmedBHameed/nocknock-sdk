import { NockNock } from '../models/NockNockModel';
declare function logout<T = any>(this: NockNock, username: string, password: string): Promise<T>;
export default logout;
