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
var axios_1 = require("axios");
var forgotPassword_1 = require("./use-cases/forgotPassword");
var login_1 = require("./use-cases/login");
var logout_1 = require("./use-cases/logout");
var resetPassword_1 = require("./use-cases/resetPassword");
var signup_1 = require("./use-cases/signup");
var NockNock = /** @class */ (function () {
    function NockNock() {
        this.auth = {
            login: login_1.default.bind(this),
            signup: signup_1.default.bind(this),
            forgotPassword: forgotPassword_1.default.bind(this),
            resetPassword: resetPassword_1.default.bind(this),
            logout: logout_1.default.bind(this)
        };
    }
    NockNock.prototype.init = function (options) {
        this._config = options.config;
        if (!this._config.baseURL)
            throw new Error('No base url provided! Please call init and pass some configuration');
        if (options.middleware) {
            this._httpClient = options.middleware;
        }
        else {
            this._httpClient = axios_1.default.create(__assign(__assign({}, this._config), { withCredentials: !!options.config.withCredentials }));
        }
    };
    return NockNock;
}());
exports.default = new NockNock();
//# sourceMappingURL=nocknock-sdk.js.map