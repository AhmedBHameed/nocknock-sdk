import { NockNock, SignupInput } from '../models/NockNockModel';
declare function signup<T = any>(this: NockNock, data: SignupInput): Promise<T>;
export default signup;
