# nocknock-sdk

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm version](https://badge.fury.io/js/nocknock-sdk.svg)](//npmjs.com/package/nocknock-sdk)
[![travis](https://travis-ci.com/AhmedBHameed/nocknock-sdk.svg?branch=main)](https://travis-ci.com/AhmedBHameed/nocknock-sdk.svg?branch=main)

<!-- [![Coveralls](https://img.shields.io/coveralls/alexjoverm/nocknock-sdk.svg)](https://coveralls.io/github/alexjoverm/nocknock-sdk) -->

Onboarding sdk for `nodeys` back-end server.

> Nodeys is a private project with echosystem micro services.

### Usage

```bash
npm i nocknock-sdk axios
OR
yarn add nocknock-sdk axios
```

### Importing library

```typescript
import {init, auth} from 'nocknock-sdk'

init({baseURL: 'https://www.your-graphql-domain.com'});

auth.login(...);
auth.signup(...);
auth.resetPassword(...);
auth.forgotPassword(...);
auth.logout(...);
```
