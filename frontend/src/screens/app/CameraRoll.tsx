import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View, ScrollView, StyleSheet } from 'react-native'
import CameraRoll from '@react-native-community/cameraroll'

import ROUTES from '../../navigation/_routes'

interface CameraRollScreenProps {}

const CameraRollScreen: CameraRollScreenProps = ({ navigation: { navigate } }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const getImages = async () => {
      try {
        const images = await CameraRoll.getPhotos({ first: 20 })
        if (images.edges.length > 0) {
          const newImages = images.edges.map(image => image.node.image)
          return setImages(newImages)
        }
      } catch (err) {
        console.warn(err)
      }
    }
    getImages()
  }, [])

  return (
    <View style={styles.container}>
      {images.length > 0 && (
        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {images.map(image => (
              <TouchableOpacity
                key={image.uri}
                onPress={() => navigate(ROUTES.CapturePhotoModal, { image })}
                style={{ height: 200, width: '33.3333%' }}>
                <Image
                  key={image}
                  source={{ uri: image.uri }}
                  style={{ height: 200, width: '100%' }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  )
}

export default CameraRollScreen

const styles = StyleSheet.create({
  container: {}
})
