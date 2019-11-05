import { createStackNavigator } from 'react-navigation-stack'

import ROUTES from './_routes'

import PlansScreen from '../screens/app/Plans'
import PaymentScreen from '../screens/app/Payment'

const PlansStack = createStackNavigator(
  {
    [ROUTES.Plans]: PlansScreen,
    [ROUTES.Payment]: PaymentScreen,
    [ROUTES.ChangePlan]: PlansScreen
  },
  {
    navigationOptions: () => ({
      header: null
    })
  }
)

export default PlansStack
