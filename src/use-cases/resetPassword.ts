import { url } from '../helpers/constants'
import { NockNock, ResetPasswordInput } from '../models/NockNockModel'

const resetPassword = (config: NockNock) => <T = any>(data: ResetPasswordInput): Promise<T> => {
  if (!config._httpClient) {
    throw new Error(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  }

  return config._httpClient.post<unknown, T>(url, {
    query:
      'mutation ResetPassword($userData: ResetPasswordInput!) {\n        resetPassword(userData: $userData) {\n            message\n          __typename\n        }\n      }',
    variables: {
      userData: {
        password: data.newPassword,
        userId: data.userId,
        verificationId: data.verificationId
      }
    }
  })
}

export default resetPassword
