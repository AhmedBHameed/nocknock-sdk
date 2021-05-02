import { NockNock, SignupInput } from '../models/NockNockModel'

function signup<T = any>(this: NockNock, data: SignupInput): Promise<T> {
  if (!this._httpClient) {
    throw new Error(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  }

  return this._httpClient.post<unknown, T>('/nodeys/v1/graphql', {
    query: `
      mutation Signup($userData: SignupInput!) {
        signup(userData: $userData) {
            message
          __typename
        }
      }
      `,
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
  })
}

export default signup
