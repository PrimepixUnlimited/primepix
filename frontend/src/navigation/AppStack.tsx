import { createStackNavigator } from 'react-navigation-stack'

import ROUTES from './_routes'

import SettingsScreen from '../screens/app/Settings'
import PlansStack from './PlansStack'
import ProfileStack from './ProfileStack'
import MainTabs from './MainTabs'
import MenuStack from './MenuStack'

const AppStack = createStackNavigator(
  {
    [ROUTES.Main]: MainTabs,
    [ROUTES.Menu]: MenuStack,
    [ROUTES.Profile]: ProfileStack,
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
