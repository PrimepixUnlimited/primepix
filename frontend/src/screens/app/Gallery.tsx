import React from 'react'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
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

import styles from '../../constants/styles'

const GalleryScreen: NavigationStackScreenComponent<Props> = () => {
  return (
    <ScrollView style={styles.common.screenContainer}>
      <SubHeading>Your gallery</SubHeading>
      <Text style={styles.text.body}>Gallery Screen</Text>
    </ScrollView>
  )
}

GalleryScreen.navigationOptions = {
  header: () => <Header showProfile showMenu title="Gallery" />
}

export default GalleryScreen
