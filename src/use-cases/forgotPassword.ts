import { NockNock, ForgotPasswordInput } from '../models/NockNockModel'

function forgotPassword<T = any>(this: NockNock, data: ForgotPasswordInput): Promise<T> {
  if (!this._httpClient) {
    throw new Error(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  }

  return this._httpClient.post<unknown, T>('/nodeys/v1/graphql', {
    query: `
      mutation ForgotPassword($email: String!) {
        forgotPassword(email: $email) {
            message
          __typename
        }
      }
      `,
    variables: {
      userData: {
        email: data.email
      }
    }
  })
}

export default forgotPassword
