"use strict";
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var axios_1 = require("axios");
var forgotPassword_1 = require("./use-cases/forgotPassword");
var login_1 = require("./use-cases/login");
var logout_1 = require("./use-cases/logout");
var resetPassword_1 = require("./use-cases/resetPassword");
var signup_1 = require("./use-cases/signup");
function init(config) {
    var _config;
    var _httpClient;
    _config = config;
    if (!_config.baseURL) {
        throw new Error('No base url provided! Please call init and pass some configuration');
    }
    _httpClient = axios_1.default.create(__assign(__assign({}, _config), { withCredentials: !!config.withCredentials }));
    var auth = {
        login: login_1.default({ _httpClient: _httpClient, _config: _config }),
        signup: signup_1.default({ _httpClient: _httpClient, _config: _config }),
        forgotPassword: forgotPassword_1.default({ _httpClient: _httpClient, _config: _config }),
        resetPassword: resetPassword_1.default({ _httpClient: _httpClient, _config: _config }),
        logout: logout_1.default({ _httpClient: _httpClient, _config: _config })
    };
    return auth;
}
exports.init = init;
//# sourceMappingURL=nocknock-sdk.js.map