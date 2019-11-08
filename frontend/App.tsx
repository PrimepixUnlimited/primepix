import React, { FC } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'react-native-elements'

import client from './src/lib/apollo-client'
import styles from './src/constants/styles'

import Navigation from './src/navigation'

const Root: FC = () => (
  <ThemeProvider theme={styles.theme}>
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  </ThemeProvider>
)

export default Root
