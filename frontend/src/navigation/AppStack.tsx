import { createStackNavigator } from 'react-navigation-stack'

import ROUTES from './_routes'

import SettingsScreen from '../screens/app/Settings'
import PlansStack from './PlansStack'
import ProfileScreen from '../screens/app/Profile'
import MainTabs from './MainTabs'
import MenuScreen from '../screens/app/Menu'

const AppStack = createStackNavigator(
  {
    [ROUTES.Main]: MainTabs,
    [ROUTES.Menu]: MenuScreen,
    [ROUTES.Profile]: ProfileScreen,
    [ROUTES.Plans]: PlansStack,
    [ROUTES.Settings]: SettingsScreen
  },
  {
    navigationOptions: () => ({
      header: null
    })
  }
)

export default AppStack
