const nockNock = require('./dist/nocknock-sdk.umd')

nockNock.init({
  config: { withCredentials: true, baseURL: 'http://localhost:5000' }
})
;(async function() {
  try {
    const res = await nockNock.auth.resetPassword({
      userId: '608ee61246cee00029bc4903',
      verificationId: '01F4QW163QW4PQ38Z7G13DSJWB',
      newPassword: 'Ahmed@hihealth123'
    })
    console.log('🚀 ~ file: index.ts ~ line 41 ~ res', res.data)
  } catch (error) {
    console.log(error.response.data)
  }
})()
