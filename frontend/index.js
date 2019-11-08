/**
 * @format
 */

import React from 'react'
import { AppRegistry } from 'react-native'

import App from './App'
import { name as appName } from './app.json'

import configureApp from './src/lib/app-config'
import configureStripe from './src/lib/stripe'

configureApp()
configureStripe()

const Main = () => <App />

AppRegistry.registerComponent(appName, () => Main)
