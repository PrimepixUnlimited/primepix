import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const AuthLoadingScreen = ({navigation: {navigate}}) => {
  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      return navigate(token ? 'app' : 'auth');
    } catch (err) {
      alert.alert('Error', err.message);
    }
  };
  useEffect(() => {
    checkAuth();
  });
  return (
    <View>
      <Text>AuthLoadingScreen</Text>
    </View>
  );
};

export default AuthLoadingScreen;
