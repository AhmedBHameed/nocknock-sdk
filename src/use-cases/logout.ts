import { url } from '../helpers/constants'
import { NockNock } from '../models/NockNockModel'

const logout = (config: NockNock) => <T = any>(username: string, password: string): Promise<T> => {
  if (!config._httpClient) {
    throw new Error(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  }

  return config._httpClient.post<unknown, T>(url, {
    query: `
      query Logout {
        logout {
            message
          __typename
        }
      }
      `,
    variables: {
      userData: { email: username, password }
    }
  })
}

export default logout
