import React, { useEffect } from 'react'
import { Alert, Dimensions, SafeAreaView, Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks'

import { ME_QUERY } from '../../graphql/queries'

import Image from '../../components/Image'

import ROUTES from '../../navigation/_routes'
import asyncStorage from '../../lib/async-storage'
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('screen')

const AuthLoadingScreen = ({ navigation: { navigate } }) => {
  const { error, data, loading } = useQuery(ME_QUERY)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await asyncStorage.getToken()
        if (!loading) {
          if (!token || !data) {
            return navigate(ROUTES.Auth)
          }
          if (!data.me.subscription) {
            return navigate(ROUTES.Plans)
          }
          return navigate(ROUTES.App)
        }
      } catch (err) {
        Alert.alert('Error', err.message)
      }
    }
    checkAuth()
  }, [data, error, loading, navigate])
  return (
    <Image
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
      }}
      source={require('../../assets/images/splash.png')}
    />
  )
}

export default AuthLoadingScreen
