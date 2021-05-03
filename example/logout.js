const nockNock = require('../dist/nocknock-sdk.umd')

nockNock.init({
  config: { withCredentials: true, baseURL: 'http://localhost:5000' }
})
;(async function() {
  try {
    const res = await nockNock.auth.logout()
    console.log('🚀 =>>', res.data)
  } catch (error) {
    console.log(error.response.data)
  }
})()
