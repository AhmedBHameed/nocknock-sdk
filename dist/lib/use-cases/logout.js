"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../helpers/constants");
function logout(username, password) {
    if (!this._httpClient) {
        throw new Error('You have to initialize some configuration first. Please call .init() method and set some configuration.');
    }
    return this._httpClient.post(constants_1.url, {
        query: "\n      query Logout {\n        logout {\n            message\n          __typename\n        }\n      }\n      ",
        variables: {
            userData: { email: username, password: password }
        }
    });
}
exports.default = logout;
//# sourceMappingURL=logout.js.map