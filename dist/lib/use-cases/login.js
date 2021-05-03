"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function login(userData) {
    if (!this._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return this._httpClient.post('/nodeys/v1/graphql', {
        query: 'query Login($userData: LoginDataInput!) {\n          login(userData: $userData) {\n            accessToken\n            refreshToken\n            userRole\n            __typename\n          }\n        }',
        variables: {
            userData: { email: userData.username, password: userData.password }
        }
    });
}
exports.default = login;
//# sourceMappingURL=login.js.map