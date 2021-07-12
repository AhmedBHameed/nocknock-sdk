import { url } from '../helpers/constants'
import { NockNock, SignupInput } from '../models/NockNockModel'

const signup = (config: NockNock) => <T = any>(data: SignupInput): Promise<T> => {
  if (!config._httpClient) {
    throw new Error(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  }

  return config._httpClient.post<unknown, T>(url, {
    query:
      'mutation Signup($userData: Signup!) {\n        signup(userData: $userData) {\n            message\n          __typename\n        }\n      }',
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
  })
}

export default signup
