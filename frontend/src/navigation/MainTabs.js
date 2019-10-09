import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/app/Home';
import GalleryScreen from '../screens/app/Gallery';
import CapturePhotoScreen from '../screens/app/CapturePhoto';
import WalletScreen from '../screens/app/Wallet';
import NotificationsScreen from '../screens/app/Notifications';

import TabBar from '../components/TabBar';
import TabBarIcon from '../components/TabBarIcon';
import Badge from '../components/Badge';

const MainTabs = createBottomTabNavigator(
  {
    homeTab: createStackNavigator(
      {
        home: {
          screen: HomeScreen,
        },
      },
      {
        navigationOptions: {
          tabBarIcon: ({focused}) => (
            <TabBarIcon name="home" type="font-awesome" focused={focused} />
          ),
          tabBarLabel: 'Home',
        },
      },
    ),
    galleryTab: createStackNavigator(
      {
        gallery: {
          screen: GalleryScreen,
        },
      },
      {
        navigationOptions: {
          tabBarIcon: ({focused}) => (
            <TabBarIcon name="photo" type="font-awesome" focused={focused} />
          ),
          tabBarLabel: 'Gallery',
        },
      },
    ),
    capturePhotoTab: createStackNavigator(
      {
        capturePhoto: {
          screen: CapturePhotoScreen,
        },
      },
      {
        navigationOptions: {
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              name="camera"
              type="font-awesome"
              focused={focused}
              raised
              size={32}
            />
          ),
          tabBarLabel: 'Capture Photo',
        },
      },
    ),
    walletTab: createStackNavigator(
      {
        wallet: {
          screen: WalletScreen,
        },
      },
      {
        navigationOptions: {
          tabBarIcon: ({focused}) => (
            <TabBarIcon name="ios-wallet" type="ionicon" focused={focused} />
          ),
          tabBarLabel: 'Wallet',
        },
      },
    ),
    notificationsTab: createStackNavigator(
      {
        notifications: {
          screen: NotificationsScreen,
        },
      },
      {
        navigationOptions: {
          tabBarIcon: ({focused}) => (
            <View>
              <TabBarIcon name="bell" type="font-awesome" focused={focused} />
              <Badge
                badgeStyle={{borderWidth: 0}}
                status="error"
                containerStyle={{position: 'absolute', top: -4, right: -4}}
                value="9+"
              />
            </View>
          ),
          tabBarLabel: 'Notifications',
        },
      },
    ),
  },
  {
    initialRouteName: 'homeTab',
    navigationOptions: () => ({
      header: null,
    }),
    tabBarComponent: TabBar,
  },
);

export default MainTabs;
