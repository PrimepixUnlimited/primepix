import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/auth/Login';

const AuthStack = createStackNavigator({
  login: LoginScreen,
});

export default AuthStack;
