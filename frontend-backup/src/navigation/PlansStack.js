import {createStackNavigator} from 'react-navigation-stack';

import PlansScreen from '../screens/app/Plans';
import PaymentScreen from '../screens/app/Payment';

const PlansStack = createStackNavigator(
  {
    plans: PlansScreen,
    payment: PaymentScreen,
    changePlan: PlansScreen,
  },
  {
    navigationOptions: () => ({
      header: null,
    }),
  },
);

export default PlansStack;
