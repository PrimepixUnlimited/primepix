import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

import ROUTES from './_routes'

import Loading from '../screens/auth/Loading'

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.
import App from './AppStack'
import Auth from './AuthStack'

const RootStack = createAnimatedSwitchNavigator(
  {
    [ROUTES.AuthLoading]: Loading,
    [ROUTES.Auth]: Auth,
    [ROUTES.App]: App
  },
  {
    initialRouteName: ROUTES.AuthLoading,
    transition: (
      <Transition.Together>
        <Transition.Out type='fade' durationMs={400} interpolation='easeIn' />
        <Transition.In type='fade' durationMs={500} />
      </Transition.Together>
    )
  }
)

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Root: RootStack
    },
    {
      navigationOptions: () => ({
        header: null
      }),
      mode: 'modal',
      headerMode: 'none'
    }
  )
)

export default AppNavigator
