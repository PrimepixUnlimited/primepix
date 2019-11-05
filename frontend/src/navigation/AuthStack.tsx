import { createStackNavigator } from 'react-navigation-stack'

import ROUTES from './_routes'

import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import Landing from '../screens/auth/Landing'

const AuthStack = createStackNavigator(
  {
    [ROUTES.Landing]: Landing,
    [ROUTES.SignIn]: Login,
    [ROUTES.SignUp]: Register
  },
  {
    initialRouteName: ROUTES.Landing,
    navigationOptions: () => ({
      header: null
    })
  }
)

export default AuthStack
