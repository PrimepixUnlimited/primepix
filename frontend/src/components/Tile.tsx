import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Tile, TileProps } from 'react-native-elements'

interface Props extends TileProps {
  caption?: string
  imageSrc: string
}

import styles from '../constants/styles'

const TileWrapper: FC<Props> = ({ caption, imageSrc, title }) => (
  <Tile
    imageSrc={{ uri: imageSrc }}
    imageContainerStyle={s.imageContainer}
    imageProps={{ resizeMode: 'cover' }}
    title={title}
    contentContainerStyle={s.container}
    titleStyle={s.titleText}
  >
    <View style={s.description}>
      <Text style={s.captionText}>{caption}</Text>
    </View>
  </Tile>
)

const s = StyleSheet.create({
  container: {
    backgroundColor: '#18191C',
    flex: 1
  },
  imageContainer: {
    backgroundColor: 'black',
    borderRadius: 15
  },
  description: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleText: {
    color: styles.colors.primary
  },
  captionText: {
    color: 'white'
  }
})

export default TileWrapper
