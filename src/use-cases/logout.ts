import { NockNock } from '../models/NockNockModel'

function logout<T = any>(this: NockNock, username: string, password: string): Promise<T> {
  if (!this._httpClient) {
    throw new Error(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  }

  return this._httpClient.post<unknown, T>('/nodeys/v1/graphql', {
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
