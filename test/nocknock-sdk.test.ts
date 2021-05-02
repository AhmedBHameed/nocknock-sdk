import { rest, server } from './testServer'
import nockNockSdk from '../src/nocknock-sdk'
import { mockErrorLoginData, mockLoginData } from './generateData'

const MOCK_LOGIN_DATA = mockLoginData()
const MOCK_ERROR_LOGIN_DATA = mockErrorLoginData()

// const dummyApiUrl = 'http://api.dummy.com/nodeys/v1/graphql'

const makeSuccessfulCall = () => {
  server.use(
    rest.post('*/nodeys/v1/graphql', async (_, res, ctx) =>
      res(ctx.status(200), ctx.json(MOCK_LOGIN_DATA))
    )
  )
}

const makeErrorCall = () => {
  server.use(
    rest.post('*/nodeys/v1/graphql', async (_, res, ctx) =>
      res(ctx.status(200), ctx.json(MOCK_ERROR_LOGIN_DATA))
    )
  )
}

describe('NockNockSdk', () => {
  it('Throw errors if init function not called', async () => {
    expect(() => {
      nockNockSdk.auth.login('', '')
    }).toThrowError(
      'You have to initialize some configuration first. Please call .init() method and set some configuration.'
    )
  })

  describe('Login functionality', () => {
    it('returns result on valid data', async () => {
      makeSuccessfulCall()

      nockNockSdk.init({ config: { baseURL: 'https://jsonplaceholder.typicode.com' } })
      const response = await nockNockSdk.auth.login('a@b.com', 'Test@123123')

      expect(response.data).toMatchObject(MOCK_LOGIN_DATA)
    })

    it('returns error on invalid login data', async () => {
      makeErrorCall()

      nockNockSdk.init({ config: { baseURL: 'https://jsonplaceholder.typicode.com' } })
      const response = await nockNockSdk.auth.login('a@b.com', 'Test@123123')

      expect(response.data).toMatchObject(MOCK_ERROR_LOGIN_DATA)
    })
  })
})
