"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../helpers/constants");
function signup(data) {
    if (!this._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return this._httpClient.post(constants_1.url, {
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
exports.default = signup;
//# sourceMappingURL=signup.js.map