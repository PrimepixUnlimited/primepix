import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.
import App from './AppStack';
import Auth from './AuthStack';

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      // AuthLoading: AuthLoadingScreen,
      auth: Auth,
      app: App,
    },
    {
      navigationOptions: () => ({
        header: null,
      }),
    },
  ),
);

export default AppNavigator;
