import { AxiosRequestConfig } from 'axios';
import { Auth, NockNockConfiguration, Middleware } from './models/NockNockModel';
declare class NockNock {
    _httpClient: any;
    _middleware: Middleware | undefined;
    _config: AxiosRequestConfig | undefined;
    auth: Auth;
    init(options: NockNockConfiguration): void;
}
declare const _default: NockNock;
export default _default;
