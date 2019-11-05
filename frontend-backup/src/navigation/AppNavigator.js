import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Loading from '../screens/auth/Loading';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.
import App from './AppStack';
import Auth from './AuthStack';

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      authLoading: Loading,
      auth: Auth,
      app: App,
    },
    {
      initialRouteName: 'authLoading',
      navigationOptions: () => ({
        header: null,
      }),
    },
  ),
);

export default AppNavigator;
