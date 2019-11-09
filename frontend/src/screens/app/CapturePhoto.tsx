import React, { useRef } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
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
  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true }
      const data = await camera.takePictureAsync(options)
    }
  }

  return (
    <View style={s.container}>
      <RNCamera
        ref={ref => {
          camera = ref
        }}
        style={s.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
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
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={takePicture} style={s.capture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
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
    width: '100%'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
})

export default CapturePhotoScreen
