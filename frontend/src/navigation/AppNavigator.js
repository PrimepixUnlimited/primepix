import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      // AuthLoading: AuthLoadingScreen,
      app: AppStack,
      auth: AuthStack,
    },
    {
      initialRouteName: 'auth',
    },
  ),
);

export default AppNavigator;
