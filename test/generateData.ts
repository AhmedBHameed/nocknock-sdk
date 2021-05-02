import * as faker from 'faker'

// Faker functions for rapid access.
const genAmount = (): number => Math.trunc(Number(faker.finance.amount) * 100)
const genEmail = faker.internet.email
const genPassword = faker.internet.password
const genName = faker.name.findName
const genId = faker.datatype.uuid
// const genNumber = faker.random.number;
const genBoolean = faker.datatype.boolean
const genCountryName = faker.address.country
const genCountryCode = faker.address.countryCode
const genPhoneNumber = faker.phone.phoneNumber
const genNotes = faker.lorem.paragraph
const genTitle = faker.lorem.sentence

const mockLoginData = () => ({
  data: {
    login: {
      accessToken: `${genId()}
        .${genId()}
        .${genId()}`,
      refreshToken: `${genId()}
      .${genId()}
      .${genId()}`,
      rule: 'admin'
    }
  }
})

const mockErrorData = () => ({
  errors: [
    {
      message: 'Some error messages!',
      locations: [],
      path: [],
      extensions: []
    }
  ]
})

const mockSignupData = () => ({
  email: genEmail(),
  password: genPassword(),
  name: {
    first: genName(),
    last: genName()
  }
})

const mockForgotPasswordData = () => ({
  email: genEmail()
})

const mockResetPasswordData = () => ({
  password: genPassword(),
  userId: genId(),
  verificationId: genId()
})

const mockMessageData = () => ({
  message: genNotes()
})

export {
  mockSignupData,
  mockResetPasswordData,
  mockMessageData,
  mockLoginData,
  mockForgotPasswordData,
  mockErrorData,
  genTitle,
  genPhoneNumber,
  genNotes,
  genName,
  genId,
  genEmail,
  genCountryName,
  genCountryCode,
  genBoolean,
  genAmount
}
