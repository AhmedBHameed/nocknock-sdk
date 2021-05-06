import axios from 'axios';

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

function forgotPassword(data) {
    if (!this._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return this._httpClient.post(url, {
        query: 'mutation ForgotPassword($email: String!) {\n        forgotPassword(email: $email) {\n            message\n          __typename\n        }\n      }',
        variables: {
            email: data.email
        }
    });
}

function login(userData) {
    if (!this._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return this._httpClient.post(url, {
        query: 'query Login($userData: LoginDataInput!) {\n          login(userData: $userData) {\n            accessToken\n            refreshToken\n            userRole\n            __typename\n          }\n        }',
        variables: {
            userData: { email: userData.username, password: userData.password }
        }
    });
}

function logout(username, password) {
    if (!this._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return this._httpClient.post(url, {
        query: "\n      query Logout {\n        logout {\n            message\n          __typename\n        }\n      }\n      ",
        variables: {
            userData: { email: username, password: password }
        }
    });
}

function resetPassword(data) {
    if (!this._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return this._httpClient.post(url, {
        query: 'mutation ResetPassword($userData: ResetPasswordInput!) {\n        resetPassword(userData: $userData) {\n            message\n          __typename\n        }\n      }',
        variables: {
            userData: {
                password: data.newPassword,
                userId: data.userId,
                verificationId: data.verificationId
            }
        }
    });
}

function signup(data) {
    if (!this._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return this._httpClient.post(url, {
        query: 'mutation Signup($userData: SignupInput!) {\n        signup(userData: $userData) {\n            message\n          __typename\n        }\n      }',
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
}

// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
var NockNock = /** @class */ (function () {
    function NockNock() {
        this.auth = {
            login: login.bind(this),
            signup: signup.bind(this),
            forgotPassword: forgotPassword.bind(this),
            resetPassword: resetPassword.bind(this),
            logout: logout.bind(this)
        };
    }
    NockNock.prototype.init = function (config) {
        this._config = config;
        if (!this._config.baseURL) {
            throw new Error('No base url provided! Please call init and pass some configuration');
        }
        this._httpClient = axios.create(__assign(__assign({}, this._config), { withCredentials: !!config.withCredentials }));
    };
    return NockNock;
}());
var nockNock = new NockNock();
var init = nockNock.init;
var auth = nockNock.auth;

export default nockNock;
export { init, auth };
//# sourceMappingURL=nocknock-sdk.es5.js.map
