import {createStackNavigator} from 'react-navigation-stack';

import SettingsScreen from '../screens/app/Settings';
import PlansStack from './PlansStack';
import ProfileScreen from '../screens/app/Profile';
import MainTabs from './MainTabs';
import MenuScreen from '../screens/app/Menu';

const AppStack = createStackNavigator(
  {
    main: MainTabs,
    menu: MenuScreen,
    profile: ProfileScreen,
    plans: PlansStack,
    settings: SettingsScreen,
  },
  {
    navigationOptions: () => ({
      header: null,
    }),
  },
);

export default AppStack;
