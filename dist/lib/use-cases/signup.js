"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function signup(data) {
    if (!this._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return this._httpClient.post('/nodeys/v1/graphql', {
        query: "\n      mutation Signup($userData: SignupInput!) {\n        signup(userData: $userData) {\n            message\n          __typename\n        }\n      }\n      ",
        variables: {
            userData: {
                email: data.email,
                password: data.password,
                name: {
                    first: data.name.first,
                    last: data.name.last
                }
            }
        }
    });
}
exports.default = signup;
//# sourceMappingURL=signup.js.map