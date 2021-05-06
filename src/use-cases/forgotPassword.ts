import { url } from '../helpers/constants'
import { NockNock, ForgotPasswordInput } from '../models/NockNockModel'

function forgotPassword<T = any>(this: NockNock, data: ForgotPasswordInput): Promise<T> {
  if (!this._httpClient) {
    throw new Error(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  }

  return this._httpClient.post<unknown, T>(url, {
    query:
      'mutation ForgotPassword($email: String!) {\n        forgotPassword(email: $email) {\n            message\n          __typename\n        }\n      }',
    variables: {
      email: data.email
    }
  })
}

export default forgotPassword
