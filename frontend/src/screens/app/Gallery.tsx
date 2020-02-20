import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import { Text } from 'react-native-elements'
import { NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

import { ME_QUERY } from '../../graphql/queries'

import Header from '../../components/Header'
import SubHeading from '../../components/SubHeading'
import Tile from '../../components/Tile'

import styles from '../../constants/styles'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

const GalleryScreen: NavigationStackScreenComponent<Props> = () => {
  const { data } = useQuery(ME_QUERY)

  const renderPhotos = photos =>
    photos.map((photo, idx) => (
      <View key={photo.filename} style={s.photo}>
        <Tile imageSrc={photo.url} title={photo.filename.replace(/^.*[\\\/]/, '')} />
      </View>
    ))

  return (
    <ScrollView style={styles.common.screenContainer}>
      <SubHeading>Your gallery</SubHeading>
      {data && data.me && data.me.files && <View>{renderPhotos(data.me.files)}</View>}
      <Text style={styles.text.body}>Gallery Screen</Text>
    </ScrollView>
  )
}

GalleryScreen.navigationOptions = {
  header: () => <Header showProfile showMenu title='Gallery' />
}

const s = StyleSheet.create({
  photo: {
    overflow: 'hidden',
    width: '100%'
  }
})

export default GalleryScreen
