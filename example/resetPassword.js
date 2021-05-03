const nockNock = require('../dist/nocknock-sdk.umd')

nockNock.init({
  config: { withCredentials: true, baseURL: 'http://localhost:5000' }
})
;(async function() {
  try {
    const res = await nockNock.auth.resetPassword({
      userId: '608ee61246cee00029bc4903',
      verificationId: '01F4QW93T9H2DKQTVJT5HB4H2H',
      newPassword: 'Ahmed@hihealth123'
    })
    console.log('🚀 =>>', res.data)
  } catch (error) {
    console.log(error.response.data)
  }
})()
