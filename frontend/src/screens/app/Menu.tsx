import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { IconType, ListItem, Text } from 'react-native-elements'
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

interface LinkProps {
  title: string
  icon: string
  iconType?: IconType
  route: string
}

import ROUTES from '../../navigation/_routes'

import Header from '../../components/Header'

import styles from '../../constants/styles'

const MENU_LINKS: LinkProps[] = [
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

const SETTINGS: LinkProps[] = [
  {
    title: 'Change plan',
    icon: 'calendar',
    iconType: 'font-awesome',
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
    {
      icon,
      iconType = 'material-community',
      title
    }: { icon: string; iconType?: IconType; title: string },
    i: number
  ) => (
    <ListItem
      containerStyle={s.container}
      key={i}
      title={title}
      leftIcon={{ color: styles.colors.primary, name: icon }}
      bottomDivider
      chevron
      titleStyle={{ color: 'white' }}
    />
  )

  const mapSettings = (
    {
      icon,
      iconType,
      route,
      title
    }: { icon: string; iconType?: IconType; route: string; title: string },
    i: number
  ) => (
    <ListItem
      containerStyle={s.container}
      key={i}
      title={title}
      leftIcon={{ color: styles.colors.primary, name: icon, type: iconType }}
      bottomDivider
      chevron
      onPress={e => handleItemPress(route)}
      titleStyle={styles.text.body}
    />
  )

  return (
    <ScrollView style={styles.common.screenContainer}>
      <View style={styles.space.m} />
      <Text h4 style={[styles.text.body, s.heading]}>
        App
      </Text>
      <View style={styles.space.s} />
      {MENU_LINKS.map(mapMenuLinks)}
      <View style={styles.space.m} />
      <Text h4 style={[styles.text.body, s.heading]}>
        Settings
      </Text>
      <View style={styles.space.s} />
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
  },
  heading: {
    marginHorizontal: 20
  }
})

export default MenuScreen
