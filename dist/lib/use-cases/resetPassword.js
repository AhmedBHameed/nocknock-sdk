"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resetPassword(data) {
    if (!this._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return this._httpClient.post('/nodeys/v1/graphql', {
        query: "\n      mutation ResetPassword($userData: ResetPasswordInput!) {\n        resetPassword(userData: $userData) {\n            message\n          __typename\n        }\n      }\n      ",
        variables: {
            userData: {
                password: data.newPassword,
                userId: data.userId,
                verificationId: data.verificationId
            }
        }
    });
}
exports.default = resetPassword;
//# sourceMappingURL=resetPassword.js.map