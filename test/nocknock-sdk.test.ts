import { rest, server } from './testServer'
import nockNockSdk from '../src/nocknock-sdk'
import {
  mockErrorData,
  mockForgotPasswordData,
  mockResetPasswordData,
  mockLoginData,
  mockSignupData,
  mockMessageData
} from './generateData'

const MOCK_ERROR_DATA = mockErrorData()
// Login
const MOCK_LOGIN_DATA = mockLoginData()
// Signup
const MOCK_SIGNUP_DATA = mockSignupData()
// ForgotPassword
const MOCK_FORGOT_PASSWORD_DATA = mockForgotPasswordData()
// ResetPassword
const MOCK_RESET_PASSWORD_DATA = mockResetPasswordData()
// Message
const MOCK_MESSAGE_DATA = mockMessageData()

const makeSuccessfulCall = (data: any) => {
  server.use(
    rest.post('*/nodeys/v1/graphql', async (_, res, ctx) => res(ctx.status(200), ctx.json(data)))
  )
}

const makeErrorCall = () => {
  server.use(
    rest.post('*/nodeys/v1/graphql', async (_, res, ctx) =>
      res(ctx.status(200), ctx.json(MOCK_ERROR_DATA))
    )
  )
}

describe('NockNockSdk', () => {
  it('Throw errors if init function called with no baseUrl.', async () => {
    expect(() => {
      nockNockSdk.init({})
    }).toThrowError('No base url provided! Please call init and pass some configuration')
  })

  it('Throw errors if init function not called', async () => {
    expect(() => {
      nockNockSdk.auth.login({ password: '', username: '' })
    }).toThrowError(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  })

  it('uses default axios as http client library when middleware is not defined', async () => {
    nockNockSdk.init({ baseURL: 'https://jsonplaceholder.typicode.com' })
    expect(!!nockNockSdk._httpClient).not.toBeUndefined()
    expect(!!nockNockSdk._httpClient).toBeTruthy()
  })

  describe('Login functionality', () => {
    it('returns result on valid data', async () => {
      makeSuccessfulCall(MOCK_LOGIN_DATA)

      nockNockSdk.init({ baseURL: 'https://jsonplaceholder.typicode.com' })
      const response = await nockNockSdk.auth.login({
        password: 'Test@123123',
        username: 'a@b.com'
      })

      expect(response.data).toMatchObject(MOCK_LOGIN_DATA)
    })

    it('returns error on invalid login data', async () => {
      makeErrorCall()

      nockNockSdk.init({ baseURL: 'https://jsonplaceholder.typicode.com' })
      const response = await nockNockSdk.auth.login({
        password: 'Test@123123',
        username: 'a@b.com'
      })

      expect(response.data).toMatchObject(MOCK_ERROR_DATA)
    })
  })

  describe('Signup functionality', () => {
    it('returns result on valid data', async () => {
      makeSuccessfulCall(MOCK_MESSAGE_DATA)

      nockNockSdk.init({ baseURL: 'https://jsonplaceholder.typicode.com' })
      const response = await nockNockSdk.auth.signup(MOCK_SIGNUP_DATA)

      expect(response.data).toMatchObject(MOCK_MESSAGE_DATA)
    })

    it('returns error on invalid signup data', async () => {
      makeErrorCall()

      nockNockSdk.init({ baseURL: 'https://jsonplaceholder.typicode.com' })
      const response = await nockNockSdk.auth.signup(MOCK_SIGNUP_DATA)

      expect(response.data).toMatchObject(MOCK_ERROR_DATA)
    })
  })

  describe('ForgotPassword functionality', () => {
    it('returns result on valid data', async () => {
      makeSuccessfulCall(MOCK_MESSAGE_DATA)

      nockNockSdk.init({ baseURL: 'https://jsonplaceholder.typicode.com' })
      const response = await nockNockSdk.auth.forgotPassword(MOCK_FORGOT_PASSWORD_DATA)

      expect(response.data).toMatchObject(MOCK_MESSAGE_DATA)
    })

    it('returns error on invalid signup data', async () => {
      makeErrorCall()

      nockNockSdk.init({ baseURL: 'https://jsonplaceholder.typicode.com' })
      const response = await nockNockSdk.auth.forgotPassword(MOCK_FORGOT_PASSWORD_DATA)

      expect(response.data).toMatchObject(MOCK_ERROR_DATA)
    })
  })

  describe('ResetPassword functionality', () => {
    it('returns result on valid data', async () => {
      makeSuccessfulCall(MOCK_MESSAGE_DATA)

      nockNockSdk.init({ baseURL: 'https://jsonplaceholder.typicode.com' })
      const response = await nockNockSdk.auth.resetPassword(MOCK_RESET_PASSWORD_DATA)

      expect(response.data).toMatchObject(MOCK_MESSAGE_DATA)
    })

    it('returns error on invalid signup data', async () => {
      makeErrorCall()

      nockNockSdk.init({ baseURL: 'https://jsonplaceholder.typicode.com' })
      const response = await nockNockSdk.auth.resetPassword(MOCK_RESET_PASSWORD_DATA)

      expect(response.data).toMatchObject(MOCK_ERROR_DATA)
    })
  })

  describe('Logout functionality', () => {
    it('logout successfully', async () => {
      makeSuccessfulCall(MOCK_MESSAGE_DATA)

      nockNockSdk.init({ baseURL: 'https://jsonplaceholder.typicode.com' })
      const response = await nockNockSdk.auth.resetPassword(MOCK_RESET_PASSWORD_DATA)

      expect(response.data).toMatchObject(MOCK_MESSAGE_DATA)
    })

    it('returns error on invalid signup data', async () => {
      makeErrorCall()

      nockNockSdk.init({ baseURL: 'https://jsonplaceholder.typicode.com' })
      const response = await nockNockSdk.auth.resetPassword(MOCK_RESET_PASSWORD_DATA)

      expect(response.data).toMatchObject(MOCK_ERROR_DATA)
    })
  })
})
