# StarSeekerApp
Welcome to the best app in the world!!

## General Setup 🛠
1. See [React Native: Environment Setup](https://reactnative.dev/docs/environment-setup) to install required tools.
2. Create a `.env.local.json`, in the root directory. This is a file used in dev only for pre-filling in your api key details.
3. Run `npm install`
4. Your ready to start using the best app in the world. 

### iOS Specifics 🍎
1. Install XCode (either from App Store or Apple Developer Portal)
2. Install Cocoapods (if it isn't already)
   - `sudo gem install cocoapods`
3. Install Pods
   - `cd ./ios`
   - `pod install` (this may take a bit of time, this will also need to be done after every native package update too)
4. Open the `./ios` folder project with XCode
   - Follow the steps to obtain development certificates in the section below: [**Code Signing**](#code-signing-✒️)
5. Done.
   - Run `yarn start` (starts metro bundler)
   - Run the app from `XCode` onto a specified device or simulator.

### Android Specifics 🤖
1. Make sure Android Studio is downloaded & setup
   - Double check you have the correct SDK version and System Image from the [React Native Docs](https://reactnative.dev/docs/environment-setup)
2. Done.
   - Run `yarn start` (starts metro bundler)
   - Run `yarn android` (builds the application - if a simulator is running it should build to the connected device) or Run the app from `Android Studio`