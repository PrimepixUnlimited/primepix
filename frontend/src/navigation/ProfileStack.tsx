import { createStackNavigator } from 'react-navigation-stack'

import ROUTES from './_routes'

import ProfileScreen from '../screens/app/Profile'

const ProfileStack = createStackNavigator(
  {
    [ROUTES.Profile]: ProfileScreen
  },
  {
    navigationOptions: () => ({
      header: null
    })
  }
)

export default ProfileStack
