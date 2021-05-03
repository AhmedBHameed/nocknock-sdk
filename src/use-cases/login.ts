import { LoginInput, NockNock } from '../models/NockNockModel'

function login<T = any>(this: NockNock, userData: LoginInput): Promise<T> {
  if (!this._httpClient) {
    throw new Error(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  }

  return this._httpClient.post<unknown, T>('/nodeys/v1/graphql', {
    query:
      'query Login($userData: LoginDataInput!) {\n          login(userData: $userData) {\n            accessToken\n            refreshToken\n            userRole\n            __typename\n          }\n        }',
    variables: {
      userData: { email: userData.username, password: userData.password }
    }
  })
}

export default login
