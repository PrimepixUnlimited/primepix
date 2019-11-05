import React, { useEffect } from 'react'
import { Alert, Text, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useQuery } from '@apollo/react-hooks'

import ROUTES from '../../navigation/_routes'

import { ME_QUERY } from '../../graphql/queries'

const AuthLoadingScreen = ({ navigation: { navigate } }) => {
  const { error, data, loading } = useQuery(ME_QUERY)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('token')
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
    <View>
      <Text>AuthLoadingScreen</Text>
    </View>
  )
}

export default AuthLoadingScreen
