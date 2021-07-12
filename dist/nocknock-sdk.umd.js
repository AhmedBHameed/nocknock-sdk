(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
    typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
    (factory((global.nocknockSdk = {}),global.axios));
}(this, (function (exports,axios) { 'use strict';

    axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var url = '/nodeys/v1/graphql';

    var forgotPassword = function (config) { return function (data) {
        if (!config._httpClient) {
            throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
        }
        return config._httpClient.post(url, {
            query: 'mutation ForgotPassword($email: String!) {\n        forgotPassword(email: $email) {\n            message\n          __typename\n        }\n      }',
            variables: {
                email: data.email
            }
        });
    }; };

    var login = function (config) { return function (userData) {
        if (!config._httpClient) {
            throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
        }
        return config._httpClient.post(url, {
            query: 'query Login($userData: LoginDataInput!) {\n          login(userData: $userData) {\n            accessToken\n            refreshToken\n            userRole\n            __typename\n          }\n        }',
            variables: {
                userData: { email: userData.username, password: userData.password }
            }
        });
    }; };

    var logout = function (config) { return function (username, password) {
        if (!config._httpClient) {
            throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
        }
        return config._httpClient.post(url, {
            query: "\n      query Logout {\n        logout {\n            message\n          __typename\n        }\n      }\n      ",
            variables: {
                userData: { email: username, password: password }
            }
        });
    }; };

    var resetPassword = function (config) { return function (data) {
        if (!config._httpClient) {
            throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
        }
        return config._httpClient.post(url, {
            query: 'mutation ResetPassword($userData: ResetPasswordInput!) {\n        resetPassword(userData: $userData) {\n            message\n          __typename\n        }\n      }',
            variables: {
                userData: {
                    password: data.newPassword,
                    userId: data.userId,
                    verificationId: data.verificationId
                }
            }
        });
    }; };

    var signup = function (config) { return function (data) {
        if (!config._httpClient) {
            throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
        }
        return config._httpClient.post(url, {
            query: 'mutation Signup($userData: Signup!) {\n        signup(userData: $userData) {\n            message\n          __typename\n        }\n      }',
            variables: {
                userData: {
                    email: data.email,
                    password: data.password,
                    name: {
                        first: data.name.first.trim(),
                        last: data.name.last.trim()
                    }
                }
            }
        });
    }; };

    // Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
    function init(config) {
        var _config;
        var _httpClient;
        _config = config;
        if (!_config.baseURL) {
            throw new Error('No base url provided! Please call init and pass some configuration');
        }
        _httpClient = axios.create(__assign(__assign({}, _config), { withCredentials: !!config.withCredentials }));
        var auth = {
            login: login({ _httpClient: _httpClient, _config: _config }),
            signup: signup({ _httpClient: _httpClient, _config: _config }),
            forgotPassword: forgotPassword({ _httpClient: _httpClient, _config: _config }),
            resetPassword: resetPassword({ _httpClient: _httpClient, _config: _config }),
            logout: logout({ _httpClient: _httpClient, _config: _config })
        };
        return auth;
    }

    exports.init = init;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nocknock-sdk.umd.js.map
