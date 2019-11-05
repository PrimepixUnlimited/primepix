import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import ROUTES from './_routes'

import Loading from '../screens/auth/Loading'

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.
import App from './AppStack'
import Auth from './AuthStack'

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      [ROUTES.AuthLoading]: Loading,
      [ROUTES.Auth]: Auth,
      [ROUTES.App]: App
    },
    {
      initialRouteName: ROUTES.AuthLoading,
      navigationOptions: () => ({
        header: null
      })
    }
  )
)

export default AppNavigator
