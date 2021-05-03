"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forgotPassword(data) {
    if (!this._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return this._httpClient.post('/nodeys/v1/graphql', {
        query: "\n      mutation ForgotPassword($email: String!) {\n        forgotPassword(email: $email) {\n            message\n          __typename\n        }\n      }\n      ",
        variables: {
            email: data.email
        }
    });
}
exports.default = forgotPassword;
//# sourceMappingURL=forgotPassword.js.map