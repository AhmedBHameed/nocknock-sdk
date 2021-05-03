const nockNock = require('../dist/nocknock-sdk.umd')

nockNock.init({
  config: { withCredentials: true, baseURL: 'http://localhost:5000' }
})
;(async function() {
  try {
    const res = await nockNock.auth.signup({
      password: 'Test@123123',
      email: 'a@b.com',
      name: {
        first: 'first',
        last: 'last'
      }
    })
    console.log('🚀 =>>', res.data)
  } catch (error) {
    console.log(error.response.data)
  }
})()
