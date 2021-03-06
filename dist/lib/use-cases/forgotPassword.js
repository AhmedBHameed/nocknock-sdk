"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../helpers/constants");
var forgotPassword = function (config) { return function (data) {
    if (!config._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return config._httpClient.post(constants_1.url, {
        query: 'mutation ForgotPassword($email: String!) {\n        forgotPassword(email: $email) {\n            message\n          __typename\n        }\n      }',
        variables: {
            email: data.email
        }
    });
}; };
exports.default = forgotPassword;
//# sourceMappingURL=forgotPassword.js.map