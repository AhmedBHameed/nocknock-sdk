import { rest, server } from './testServer'
import nockNockSdk from '../src/nocknock-sdk'

const makeSuccessfulCall = () => {
  server.use(
    rest.post('*/nodeys/v1/graphql', async (_, res, ctx) => res(ctx.status(200), ctx.json({})))
  )
}

describe('NockNockSdk Inputs', () => {
  it('Login Input', async () => {
    makeSuccessfulCall()
    const mockPostFun = jest.fn()

    nockNockSdk.init({
      config: { baseURL: 'https://jsonplaceholder.typicode.com' },
      middleware: {
        post: mockPostFun
      } as any
    })

    const response = await nockNockSdk.auth.login({
      password: 'Test@123123',
      username: 'a@b.com'
    })

    expect(mockPostFun).toHaveBeenCalledTimes(1)
    expect(mockPostFun).toHaveBeenCalledWith('/nodeys/v1/graphql', {
      query:
        'query Login($userData: LoginDataInput!) {\n          login(userData: $userData) {\n            accessToken\n            refreshToken\n            userRole\n            __typename\n          }\n        }',
      variables: {
        userData: { email: 'a@b.com', password: 'Test@123123' }
      }
    })
  })

  it('Signup Input', async () => {
    makeSuccessfulCall()
    const mockPostFun = jest.fn()

    nockNockSdk.init({
      config: { baseURL: 'https://jsonplaceholder.typicode.com' },
      middleware: {
        post: mockPostFun
      } as any
    })

    const response = await nockNockSdk.auth.signup({
      password: 'Test@123123',
      email: 'a@b.com',
      name: {
        first: 'first',
        last: 'last'
      }
    })

    expect(mockPostFun).toHaveBeenCalledTimes(1)
    expect(mockPostFun).toHaveBeenCalledWith('/nodeys/v1/graphql', {
      query:
        'mutation Signup($userData: SignupInput!) {\n        signup(userData: $userData) {\n            message\n          __typename\n        }\n      }',
      variables: {
        userData: {
          email: 'a@b.com',
          password: 'Test@123123',
          name: {
            first: 'first',
            last: 'last'
          }
        }
      }
    })
  })

  it('ForgotPassword Input', async () => {
    makeSuccessfulCall()
    const mockPostFun = jest.fn()

    nockNockSdk.init({
      config: { baseURL: 'https://jsonplaceholder.typicode.com' },
      middleware: {
        post: mockPostFun
      } as any
    })

    await nockNockSdk.auth.forgotPassword({
      email: 'a@b.com'
    })

    expect(mockPostFun).toHaveBeenCalledTimes(1)
    expect(mockPostFun).toHaveBeenCalledWith('/nodeys/v1/graphql', {
      query:
        'mutation ForgotPassword($email: String!) {\n        forgotPassword(email: $email) {\n            message\n          __typename\n        }\n      }',
      variables: {
        email: 'a@b.com'
      }
    })
  })

  it('resetPassword Input', async () => {
    makeSuccessfulCall()
    const mockPostFun = jest.fn()

    nockNockSdk.init({
      config: { baseURL: 'https://jsonplaceholder.typicode.com' },
      middleware: {
        post: mockPostFun
      } as any
    })

    await nockNockSdk.auth.resetPassword({
      newPassword: 'Test@123123',
      userId: 'abc-123',
      verificationId: 'ABC123'
    })

    expect(mockPostFun).toHaveBeenCalledTimes(1)
    expect(mockPostFun).toHaveBeenCalledWith('/nodeys/v1/graphql', {
      query:
        'mutation ResetPassword($userData: ResetPasswordInput!) {\n        resetPassword(userData: $userData) {\n            message\n          __typename\n        }\n      }',
      variables: {
        userData: {
          password: 'Test@123123',
          userId: 'abc-123',
          verificationId: 'ABC123'
        }
      }
    })
  })
})
