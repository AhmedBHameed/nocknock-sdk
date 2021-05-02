import { NockNock, ResetPasswordInput } from '../models/NockNockModel'

function resetPassword<T = any>(this: NockNock, data: ResetPasswordInput): Promise<T> {
  if (!this._httpClient) {
    throw new Error(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  }

  return this._httpClient.post<unknown, T>('/nodeys/v1/graphql', {
    query: `
      mutation ResetPassword($userData: ResetPasswordInput!) {
        resetPassword(userData: $userData) {
            message
          __typename
        }
      }
      `,
    variables: {
      userData: {
        newPassword: data.password,
        userId: data.userId,
        verificationId: data.verificationId
      }
    }
  })
}

export default resetPassword
