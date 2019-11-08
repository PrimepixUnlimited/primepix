import React, { FC } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

import ROUTES from '../../navigation/_routes'

import Header from '../../components/Header'

import styles from '../../constants/styles'

const MENU_LINKS = [
  {
    title: 'Appointments',
    icon: 'av-timer',
    route: ''
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
    route: ''
  }
]

const SETTINGS = [
  {
    title: 'Change plan',
    icon: 'edit',
    route: ROUTES.ChangePlan
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
    route: ''
  }
]

const MenuScreen: NavigationStackScreenComponent<Props> = ({
  navigation: { navigate }
}) => {
  const handleItemPress = (routeName: string) => navigate(routeName)

  const mapMenuLinks = (
    { icon, title }: { icon: string; title: string },
    i: number
  ) => (
    <ListItem
      containerStyle={s.container}
      key={i}
      title={title}
      leftIcon={{ color: '#c8d0d8', name: icon }}
      bottomDivider
      chevron
      titleStyle={{ color: 'white' }}
    />
  )

  const mapSettings = (
    { icon, route, title }: { icon: string; route: string; title: string },
    i: number
  ) => (
    <ListItem
      containerStyle={s.container}
      key={i}
      title={title}
      leftIcon={{ color: '#c8d0d8', name: icon }}
      bottomDivider
      chevron
      onPress={e => handleItemPress(route)}
      titleStyle={styles.text.body}
    />
  )

  return (
    <ScrollView style={styles.common.screenContainer}>
      <Text h4 style={styles.text.body}>
        App
      </Text>
      {MENU_LINKS.map(mapMenuLinks)}
      <Text h4 style={styles.text.body}>
        Settings
      </Text>
      {SETTINGS.map(mapSettings)}
    </ScrollView>
  )
}

MenuScreen.navigationOptions = {
  header: () => <Header showBack title="Navigation" />
}

const s = StyleSheet.create({
  container: {
    backgroundColor: styles.greyScale.black1
  }
})

export default MenuScreen
