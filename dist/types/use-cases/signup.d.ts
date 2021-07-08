import { NockNock, SignupInput } from '../models/NockNockModel';
declare const signup: (config: NockNock) => <T = any>(data: SignupInput) => Promise<T>;
export default signup;
