import { AxiosRequestConfig } from 'axios';
import { Auth } from './models/NockNockModel';
declare class NockNock {
    _httpClient: any;
    _config: AxiosRequestConfig | undefined;
    auth: Auth;
    init(config: AxiosRequestConfig): void;
}
declare const nockNock: NockNock;
export declare const init: (config: AxiosRequestConfig) => void;
export declare const auth: Auth;
export default nockNock;
