import { url } from '../helpers/constants'
import { LoginInput, NockNock } from '../models/NockNockModel'

const login = (config: NockNock) => <T = any>(userData: LoginInput): Promise<T> => {
  if (!config._httpClient) {
    throw new Error(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  }

  return config._httpClient.post<unknown, T>(url, {
    query:
      'query Login($userData: LoginDataInput!) {\n          login(userData: $userData) {\n            accessToken\n            refreshToken\n            userRole\n            __typename\n          }\n        }',
    variables: {
      userData: { email: userData.username, password: userData.password }
    }
  })
}

export default login
