import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, Divider, SearchBar, Text } from 'react-native-elements'
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
import Tile from '../../components/Tile'
import SubHeading from '../../components/SubHeading'
import Icon from '../../components/Icon'

import styles from '../../constants/styles'

const ARTISTS = [
  {
    name: 'John Smith',
    id: 1,
    avatarUrl:
      'https://media.istockphoto.com/photos/abstract-woman-profile-picture-id508789003?k=6&m=508789003&s=612x612&w=0&h=-uG5W0WFcKPTxlYfnJ0inoou2pF0GT3rXaTPeR3Ga3c=',
    isPro: true,
    photos: [
      {
        caption: 'This is the first caption',
        id: 1.1,
        imageSrc:
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Audi 1'
      },
      {
        caption: 'This is the second caption',
        id: 1.2,
        imageSrc:
          'https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Audi 2'
      }
    ]
  },
  {
    name: 'Emanuel Eto',
    id: 2,
    avatarUrl:
      'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    isPro: false,
    photos: [
      {
        caption: 'This is the second caption',
        id: 2.1,
        imageSrc:
          'https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Sea'
      },
      {
        caption: 'This is the second caption',
        id: 2.2,
        imageSrc:
          'https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Sea'
      }
    ]
  },
  {
    name: 'Larisa Donovan',
    id: 3,
    avatarUrl:
      'https://t3.ftcdn.net/jpg/01/27/77/26/240_F_127772685_58ZWobOIhm9LbuGRwvkvjPamYaQvrnXm.jpg',
    isPro: false,
    photos: [
      {
        caption: 'This is the third caption',
        id: 3.1,
        imageSrc:
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Tile 3'
      },
      {
        caption: 'This is the third caption',
        id: 3.2,
        imageSrc:
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Tile 3'
      }
    ]
  }
]

const HomeScreen: NavigationStackScreenComponent<Props> = () => {
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const updateSearch = search => setSearch(search)

  const renderArtist = ({ photos }) =>
    photos.map(({ caption, id, imageSrc, title }, idx) => {
      return (
        <View key={id} style={[s.photo, { marginLeft: idx === 0 ? 0 : 20 }]}>
          <Tile caption={caption} imageSrc={imageSrc} title={title} />
        </View>
      )
    })

  const renderArtists = () =>
    ARTISTS.map((artist, idx) => (
      <View key={artist.id}>
        <View style={s.artistHeading}>
          <Avatar rounded source={{ uri: artist.avatarUrl }} />
          <Text style={[styles.text.body, s.artistNameText]}>
            {artist.name}
          </Text>
        </View>
        <ScrollView key={artist.id} horizontal>
          {renderArtist(artist)}
        </ScrollView>
        {idx !== ARTISTS.length - 1 && <Divider style={s.divider} />}
      </View>
    ))

  return (
    <ScrollView style={styles.common.screenContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <SubHeading>Followed artists</SubHeading>
        <View style={{ top: 35, right: 10 }}>
          <Icon
            color="white"
            name="search"
            onPress={() => setShowSearch(!showSearch)}
            type="font-awesome"
            underlayColor={styles.greyScale.black2}
          />
        </View>
      </View>
      {showSearch && (
        <SearchBar
          containerStyle={{ backgroundColor: styles.greyScale.black1 }}
          placeholder="Type here..."
          inputStyle={{ color: 'white' }}
          onChangeText={updateSearch}
          value={search}
        />
      )}
      <View style={styles.common.contentContainer}>{renderArtists()}</View>
    </ScrollView>
  )
}

HomeScreen.navigationOptions = {
  header: () => <Header showProfile showMenu title="Home" />
}

const s = StyleSheet.create({
  artistHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  artistNameText: {
    marginLeft: 10
  },
  photo: {
    overflow: 'hidden',
    width: 300
  },
  divider: {
    backgroundColor: styles.greyScale.black2,
    height: 10,
    marginBottom: 30
  }
})

export default HomeScreen
