import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import ROUTES from './_routes'

import HomeScreen from '../screens/app/Home'
import GalleryScreen from '../screens/app/Gallery'
import CapturePhotoScreen from '../screens/app/CapturePhoto'
import WalletScreen from '../screens/app/Wallet'
import NotificationsScreen from '../screens/app/Notifications'

import TabBar from '../components/TabBar'
import TabBarIcon from '../components/TabBarIcon'
import Badge from '../components/Badge'

const MainTabs = createBottomTabNavigator(
  {
    [ROUTES.HomeTab]: createStackNavigator(
      {
        [ROUTES.Home]: {
          screen: HomeScreen
        }
      },
      {
        navigationOptions: {
          header: null,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='home' type='font-awesome' focused={focused} />
          ),
          tabBarLabel: 'Home'
        }
      }
    ),
    [ROUTES.GalleryTab]: createStackNavigator(
      {
        [ROUTES.Gallery]: {
          screen: GalleryScreen
        }
      },
      {
        navigationOptions: {
          header: null,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='photo' type='font-awesome' focused={focused} />
          ),
          tabBarLabel: 'Gallery'
        }
      }
    ),
    [ROUTES.CapturePhotoTab]: createStackNavigator(
      {
        [ROUTES.CapturePhoto]: {
          screen: CapturePhotoScreen
        }
      },
      {
        navigationOptions: {
          header: null,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='camera' type='font-awesome' focused={focused} raised size={32} />
          ),
          tabBarLabel: 'Capture Photo'
        }
      }
    ),
    [ROUTES.WalletTab]: createStackNavigator(
      {
        [ROUTES.Wallet]: {
          screen: WalletScreen
        }
      },
      {
        navigationOptions: {
          header: null,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name='ios-wallet' type='ionicon' focused={focused} />
          ),
          tabBarLabel: 'Wallet'
        }
      }
    ),
    [ROUTES.NotificationsTab]: createStackNavigator(
      {
        [ROUTES.Notifications]: {
          screen: NotificationsScreen
        }
      },
      {
        navigationOptions: {
          header: null,
          tabBarIcon: ({ focused }) => (
            <View>
              <TabBarIcon name='bell' type='font-awesome' focused={focused} />
              <Badge
                badgeStyle={{ borderWidth: 0 }}
                status='error'
                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                value='9+'
              />
            </View>
          ),
          tabBarLabel: 'Notifications'
        }
      }
    )
  },
  {
    initialRouteName: ROUTES.HomeTab,
    navigationOptions: () => ({
      header: null
    }),
    tabBarComponent: TabBar
  }
)

export default MainTabs
