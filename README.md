# nocknock-sdk

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<!-- [![Coveralls](https://img.shields.io/coveralls/alexjoverm/typescript-library-starter.svg)](https://coveralls.io/github/alexjoverm/typescript-library-starter) -->

Onboarding sdk for nodeys back-end server.

### Usage

```bash
npm i nocknock-sdk axios
OR
yarn add nocknock-sdk axios
```

As you see we need `axios` to make it work or you can configure your own middleware as follow:

```typescript
import { init, auth } from 'nocknock-sdk'

init({ config: { baseURL: 'https://www.example-domain.com' }, middleware: fetch })
```

### Importing library

```typescript
import {init, auth} from 'nocknock-sdk'

init({ config: { baseURL: 'https://www.example-domain.com' } });

auth.login(...);
auth.signup(...);
auth.resetPassword(...);
auth.forgotPassword(...);
auth.logout(...);
```
