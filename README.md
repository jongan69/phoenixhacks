# Phoenix Hacks
This is the official repository for the Florida Polytechnic Hackathon Application
scheduled for January 2020

![Image of Bootscreen](https://github.com/jongan69/phoenixhacks/blob/master/src/img/2.gif?raw=true)

This is a mobile application built using react native on Mac OS, currently in development

In order to get the application working on your local device

# Prerequisites / Requirements
This application will require you to have the following wokring and installed

Currently runninng on
Node: v12.2.0
React-native-cli: 2.0.1
React-native: 0.60.3

Depending on the mobile development enviornement you are running, These are the steps you would take

# MacOS (iOS or Andoroid)

For MacOS you must have Xcode and Android studio installed with command line tools, and a few other things

1. You can install Xcode from the App store and android studio from: https://developer.android.com/studio
2. Run xcode-select --install 
3. brew install yarn
4. brew install node
5. brew install watchman
6. brew tap AdoptOpenJDK/openjdk
7. brew cask install adoptopenjdk8

Once these are installed, you can git pull the repository using these commands:

1. git clone https://github.com/jongan69/phoenixhacks.git
2. cd phoenixhacks
3. cd ios
4. pod install

Once pods install completes, you can 
1. cd ..
2. npm install or yarn install , both work but perferably yarn

To run on iOS:
react-native run-ios 

To run on Android:
react-native run-android


# Windows ( Andorid Only ) ( Untested since July )

In order to get the android working on windows, you should have the following:

Chocolately:
https://chocolatey.org

Once you have this you should be able to get the following:
Java SE Development Kit (JDK)
Python 2 (run the following)

To do so run these commands:
1. choco install -y nodejs.install python2 jdk8
2. npm install -g react-native-cli
3. git clone https://github.com/jongan69/phoenixhacks.git

Assuming these steps went smoothly you will need to setup android studio:

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

![Image of Android Studio](https://facebook.github.io/react-native/docs/assets/GettingStartedAndroidStudioWelcomeWindows.png)


# Refrence these links for help
React native : https://facebook.github.io/react-native/docs/getting-started
