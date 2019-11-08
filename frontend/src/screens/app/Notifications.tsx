import React from 'react'
import { ScrollView } from 'react-native'
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

import Header from '../../components/Header'
import SubHeading from '../../components/SubHeading'
import TabBarIcon from '../../components/TabBarIcon'

import styles from '../../constants/styles'

const NotificationsScreen: NavigationStackScreenComponent<Props> = () => {
  return (
    <ScrollView style={styles.common.screenContainer}>
      <SubHeading>Notifications</SubHeading>
      {/* <Text style={styles.text.body}>Gallery Screen</Text> */}
    </ScrollView>
  )
}

NotificationsScreen.navigationOptions = {
  header: () => <Header showProfile showMenu title="Gallery" />
}

export default NotificationsScreen
