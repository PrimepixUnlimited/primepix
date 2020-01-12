import React from 'react'
import { ScrollView, View } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import { Text } from 'react-native-elements'
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

import { ME_QUERY } from '../../graphql/queries'

import Header from '../../components/Header'
import SubHeading from '../../components/SubHeading'

import styles from '../../constants/styles'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

const GalleryScreen: NavigationStackScreenComponent<Props> = () => {
  const { data } = useQuery(ME_QUERY)

  return (
    <ScrollView style={styles.common.screenContainer}>
      <SubHeading>Your gallery</SubHeading>
      {data && data.me && data.me.files && (
        <View>
          <Text>Your files</Text>
        </View>
      )}
      <Text style={styles.text.body}>Gallery Screen</Text>
    </ScrollView>
  )
}

GalleryScreen.navigationOptions = {
  header: () => <Header showProfile showMenu title="Gallery" />
}

export default GalleryScreen
