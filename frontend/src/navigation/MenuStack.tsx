import { createStackNavigator } from 'react-navigation-stack'

import ROUTES from './_routes'

import MenuScreen from '../screens/app/Menu'
import PlansScreen from '../screens/app/Plans'

const MenuStack = createStackNavigator(
  {
    [ROUTES.Menu]: MenuScreen,
    [ROUTES.ChangePlan]: PlansScreen
  },
  {
    navigationOptions: () => ({
      header: null
    })
  }
)

export default MenuStack
