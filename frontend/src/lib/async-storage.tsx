import { Alert } from 'react-native'
import * as SecureStore from 'expo-secure-store'

const setToken = async token => {
  try {
    await SecureStore.setItemAsync('token', JSON.stringify(token))
  } catch (err) {
    Alert.alert('Error', err.message)
  }
}

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync('token')
    return JSON.parse(token)
  } catch (err) {
    Alert.alert('Error', err.message)
  }
}

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync('token')
  } catch (err) {
    Alert.alert('Error', err.message)
  }
}

export default {
  setToken,
  getToken,
  removeToken
}
