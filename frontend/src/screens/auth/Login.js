import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Header from '../../components/Header';
import ScreenView from '../../components/ScreenView';
import Button from '../../components/Button';
import Input from '../../components/Input';

import asyncStorage from '../../lib/async-storage';
import styles from '../../constants/styles';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

const LoginScreen = ({navigation: {navigate}}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signin, {loading}] = useMutation(SIGNIN_MUTATION);

  const handleSubmit = async e => {
    try {
      const variables = {email, password};
      const {
        data: {
          signin: {token},
        },
      } = await signin({variables});
      if (token) {
        await asyncStorage.setToken(token);
        navigate('main');
      }
    } catch (err) {
      return Alert.alert('Error', err.message);
    }
  };

  return (
    <ScreenView heading="Sign in">
      <Input
        containerStyle={styles.space.m}
        label="Your email address"
        leftIconName="email"
        onChangeText={val => setEmail(val)}
        placeholder="Email"
        textContentType="username"
        value={email}
      />
      <Input
        containerStyle={styles.space.m}
        label="Password"
        leftIconName="lock"
        onChangeText={val => setPassword(val)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        value={password}
      />
      <Button loading={loading} onPress={handleSubmit} title="Sign in" />
      <Button
        onPress={e => navigate('signup')}
        title="Don't have an account? Register"
        type="clear"
      />
      <View style={styles.space.xxl} />
    </ScreenView>
  );
};

LoginScreen.navigationOptions = ({navigation}) => ({
  header: <Header showBack title="Login" />,
});

export default LoginScreen;
