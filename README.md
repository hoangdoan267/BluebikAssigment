# BlueBik assigment

<table>
  <tr>
     <td colspan=2>Basic</td>
     <td>Additional</td>
     <td>Purpose</td>
    <td>Result</td>
  </tr>
  <tr>
    <td><img src="https://imgur.com/UXXPyCf.png"  alt="1" width = 131px height = 282px ></td>
    <td><img src="https://imgur.com/YaDzH4Z.png"  alt="1" width = 131px height = 282px ></td>
    <td><img src="https://imgur.com/1QSoJX7.png"  alt="1" width = 131px height = 282px ></td>
    <td><img src="https://imgur.com/jRo1RnK.png"  alt="1" width = 131px height = 282px ></td>
        <td><img src="https://imgur.com/DWZux9x.png"  alt="1" width = 131px height = 282px ></td>
  </tr>
 </table>

## Features checklist

- [x] Gather user information from 3 onboarding steps.
- [x] Basic information: Full name(required), ID Card Number.
- [x] Additional information: Email, Phone Number, Date Of Birth.
- [x] Purpose: List of purpose of new account (choose at least 1 option).
- [x] Order of the onboarding flow should be configurable. Change `store/slices/configSlice.ts` file.
- [x] Three onboarding steps have been written with some components testing.

## How to start the app

1. `yarn install`
2. `cd ios && pod install`
3. At the root folder: `yarn ios` or `yarn android`

## How to run unit testing

`yarn test`

## Behind the scene

This project has been built with:

- Typescript
- React, React Native
- React Navigation
- React Redux and Redux Toolkit (Global State for onboarding model)
- React Native Testing Library (Component / Unit Testing)

## Caveat

- Due to the purpose of assignment, many components and the app have not been optimized performance yet.
