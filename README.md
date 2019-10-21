# Phoenix Hacks
This is the official repository for the Florida Polytechnic Hackathon Application
scheduled for January 2020

This is a mobile application built using react native on Mac OS, currently in development

In order to get the application working on your local device

# Prerequisites / Requirements
This application will require you to have the following wokring and installed

Currently runninng on
Node: v12.2.0
React-native-cli: 2.0.1
React-native: 0.60.3

Inorder for react native to work properly you will also need to have to the following installed

Depending on the mobile development enviornement you are running, These are the steps you would take

# MacOS

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

# To run on iOS
react-native run-ios 

# To run on Android
react-native run-android


# Windows
Untested since July
