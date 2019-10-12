import {createStackNavigator} from 'react-navigation-stack';

import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Landing from '../screens/app/Landing';

const AuthStack = createStackNavigator(
  {
    landing: Landing,
    signin: Login,
    signup: Register,
  },
  {
    initialRouteName: 'landing',
    navigationOptions: () => ({
      header: null,
    }),
  },
);

export default AuthStack;
