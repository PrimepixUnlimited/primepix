import {createStackNavigator} from 'react-navigation-stack';

import SettingsScreen from '../screens/app/Settings';
import MainTabs from './MainTabs';
import MenuScreen from '../screens/app/Menu';

const AppStack = createStackNavigator({
  main: MainTabs,
  menuTab: createStackNavigator(
    {
      menu: MenuScreen,
    },
    {
      navigationOptions: () => ({
        header: null,
      }),
    },
  ),
  settings: SettingsScreen,
});

export default AppStack;
