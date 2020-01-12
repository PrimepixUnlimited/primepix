import React, { useRef, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
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

const CapturePhotoScreen: NavigationStackScreenComponent<Props> = () => {
  let camera = useRef()
  const [image, setImage] = useState(null)
  // const [cameraOptions, setCameraOptions] = useState({})

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.7, base64: true }
      const data = await camera.takePictureAsync(options)
      setImage(data.uri)
      console.log(data)
    }
  }

  const reTakePicture = () => {
    if (image) {
      setImage(null)
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
    <TouchableOpacity onPress={takePicture} style={s.capture}>
      <Text style={{ fontSize: 14 }}>CAPTURE</Text>
    </TouchableOpacity>
  )

  const renderTakenPhoto = <Image source={{ uri: image }} style={s.preview} />

  const renderTakenPhotoButtons = (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        width: '100%'
      }}
    >
      <TouchableOpacity onPress={reTakePicture} style={s.capture}>
        <Text style={{ fontSize: 14 }}>RETAKE PHOTO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reTakePicture} style={s.capture}>
        <Text style={{ fontSize: 14 }}>UPLOAD PHOTO</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={s.container}>
      {!image ? renderCamera : renderTakenPhoto}

      <View style={{ position: 'absolute', bottom: 0 }}>
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
  capture: {
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 10,
    padding: 15,
    paddingHorizontal: 20
  }
})

export default CapturePhotoScreen
