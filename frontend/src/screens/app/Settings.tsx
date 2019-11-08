import React from 'react'
import { Text } from 'react-native'
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

const SettingsScreen: NavigationStackScreenComponent<Props> = () => {
  return <Text>Settings Screen</Text>
}

export default SettingsScreen
