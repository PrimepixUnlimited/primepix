import React, { useRef, useState, useEffect } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useMutation } from '@apollo/react-hooks'
import { RNCamera } from 'react-native-camera'
import CameraRoll from '@react-native-community/cameraroll'
import { NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { ReactNativeFile } from 'apollo-upload-client'

import { CREATE_IMAGE_MUTATION } from '../../graphql/mutations'

import Button from '../../components/Button'
import Icon from '../../components/Icon'

import styles from '../../constants/styles'
import ROUTES from '../../navigation/_routes'

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

const CapturePhotoScreen: NavigationStackScreenComponent<Props> = ({
  navigation: { goBack, navigate, getParam }
}) => {
  let camera: RNCamera = useRef()
  const selectedImage = getParam('image', null)
  const [image, setImage] = useState()
  const [createImage, { loading: imageUploading }] = useMutation(CREATE_IMAGE_MUTATION)
  const [cameraRollImage, setCameraRollImage] = useState()

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const photos = await CameraRoll.getPhotos({ first: 1, assetType: 'Photos' })
        if (photos.edges.length > 0) {
          setCameraRollImage(photos.edges[0].node.image.uri)
        }
      } catch (err) {
        console.warn(err.message)
      }
    }

    getPhotos()
    if (selectedImage) setImage(selectedImage)
  })

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.7, base64: true }
      const data = await camera.takePictureAsync(options)
      setImage(data)
    }
  }

  const reTakePicture = () => {
    if (image) {
      setImage(null)
    }
  }

  const uploadPicture = async () => {
    try {
      if (!image) throw Error('there is no image')

      const file = new ReactNativeFile({
        uri: image.uri,
        name: image.filename,
        type: 'image/jpeg'
      })

      const res = await createImage({ variables: { file } })
      if (res.data && res.data.createImage) {
        return navigate(ROUTES.Gallery)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  const renderCamera = (
    <RNCamera
      ref={ref => {
        camera = ref
      }}
      style={s.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.auto}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel'
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel'
      }}
      onGoogleVisionBarcodesDetected={({ barcodes }) => {
        console.log(barcodes)
      }}
    />
  )

  const renderCameraButtons = (
    <TouchableOpacity onPress={takePicture} style={s.captureIcon}>
      <Icon color='white' name='camera' type='font-awesome' raised size={32} />
    </TouchableOpacity>
  )

  const renderTakenPhoto = <Image source={{ uri: image && image.uri }} style={s.preview} />

  const renderTakenPhotoButtons = (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        width: '100%'
      }}>
      <Button onPress={reTakePicture} title='RETAKE PHOTO' />
      <Button onPress={uploadPicture} title='UPLOAD PHOTO' />
    </View>
  )

  return (
    <View style={s.container}>
      {!image ? renderCamera : renderTakenPhoto}

      <TouchableOpacity
        onPress={() => navigate(ROUTES.CameraRoll)}
        style={{
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 5,
          overflow: 'hidden',
          position: 'absolute',
          top: 60,
          left: 20
        }}>
        <Image source={{ uri: cameraRollImage }} style={{ height: 40, width: 40 }} />
      </TouchableOpacity>
      <View style={{ position: 'absolute', top: 60, right: 20 }}>
        <Icon
          color='white'
          name='times'
          onPress={() => goBack()}
          size={32}
          type='font-awesome'
          underlayColor={styles.greyScale.black1}
        />
      </View>
      <View style={s.buttonsContainer}>
        {!image ? renderCameraButtons : renderTakenPhotoButtons}
      </View>
    </View>
  )
}

CapturePhotoScreen.navigationOptions = {
  header: null
}

const s = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'black',
    width: '100%',
    zIndex: 99999
  },
  preview: {
    flex: 1,
    alignItems: 'center'
  },
  buttonsContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  captureIcon: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 100,
    flex: 1,
    justifyContent: 'center',
    height: 70,
    margin: 10,
    width: 70
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 10,
    padding: 15,
    paddingHorizontal: 20
  }
})

export default CapturePhotoScreen
