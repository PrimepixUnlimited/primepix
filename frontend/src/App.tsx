import React, { FC } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'react-native-elements'

import configureApp from './lib/app-config'
import configureStripe from './lib/stripe'

import client from './lib/apollo-client'
import styles from './constants/styles'

import Navigation from './navigation'

configureApp()
// configureStripe()

interface Props {
  skipLoadingScreen: boolean
}

interface States {
  isLoadingComplete: boolean
}

export default class App extends React.Component<Props, States> {
  public render() {
    return (
      <ThemeProvider theme={styles.theme}>
        <ApolloProvider client={client}>
          <Navigation />
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}
