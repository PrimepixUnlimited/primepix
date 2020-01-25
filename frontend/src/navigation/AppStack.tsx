import { createStackNavigator } from 'react-navigation-stack'

import ROUTES from './_routes'
import { dynamicModalTransition } from './_utils'

import SettingsScreen from '../screens/app/Settings'
import PlansStack from './PlansStack'
import ProfileStack from './ProfileStack'
import MainTabs from './MainTabs'
import MenuStack from './MenuStack'
import ModalsStack from './ModalsStack'

const AppStack = createStackNavigator(
  {
    [ROUTES.Main]: MainTabs,
    [ROUTES.Menu]: MenuStack,
    [ROUTES.Profile]: ProfileStack,
    [ROUTES.Plans]: PlansStack,
    [ROUTES.Settings]: SettingsScreen,
    ...ModalsStack
  },
  {
    navigationOptions: () => ({
      header: null
    }),
    transitionConfig: dynamicModalTransition
  }
)

export default AppStack
