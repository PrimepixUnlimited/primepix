/**
 * @format
 */

import React from 'react'
import { AppRegistry } from 'react-native'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'react-native-elements'

import App from './src/App'
import { name as appName } from './app.json'
import client from './src/lib/apollo-client'
import styles from './src/constants/styles'

const Main = () => (
  <ThemeProvider theme={styles.theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>
)

AppRegistry.registerComponent(appName, () => Main)
