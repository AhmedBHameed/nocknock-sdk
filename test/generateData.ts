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

const mockErrorLoginData = () => ({
  errors: [
    {
      message: 'User not found or inactive!',
      locations: [],
      path: [],
      extensions: []
    }
  ]
})

export {
  genAmount,
  genBoolean,
  genCountryCode,
  genCountryName,
  genEmail,
  genPhoneNumber,
  genId,
  genName,
  genNotes,
  genTitle,
  mockErrorLoginData,
  mockLoginData
}
