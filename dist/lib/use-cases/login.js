"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../helpers/constants");
var login = function (config) { return function (userData) {
    if (!config._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return config._httpClient.post(constants_1.url, {
        query: 'query Login($userData: LoginDataInput!) {\n          login(userData: $userData) {\n            accessToken\n            refreshToken\n            userRole\n            __typename\n          }\n        }',
        variables: {
            userData: { email: userData.username, password: userData.password }
        }
    });
}; };
exports.default = login;
//# sourceMappingURL=login.js.map