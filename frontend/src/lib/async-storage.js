import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    console.log(err.message);
    Alert.alert('Error', err.message);
  }
};

const setToken = async token => {
  try {
    await AsyncStorage.setItem('token', JSON.stringify(token));
  } catch (err) {
    console.log(err.message);
    Alert.alert('Error', err.message);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return JSON.parse(token);
  } catch (err) {
    console.log(err.message);
    Alert.alert('Error', err.message);
  }
};

export default {
  clearAll,
  setToken,
  getToken,
};
