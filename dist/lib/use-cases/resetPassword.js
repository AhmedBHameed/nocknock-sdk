"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../helpers/constants");
var resetPassword = function (config) { return function (data) {
    if (!config._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return config._httpClient.post(constants_1.url, {
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
exports.default = resetPassword;
//# sourceMappingURL=resetPassword.js.map