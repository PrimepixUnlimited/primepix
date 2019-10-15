import React, {useState} from 'react';
import {View} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Header from '../../components/Header';
import ScreenView from '../../components/ScreenView';
import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from '../../constants/styles';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
    }
  }
`;

const LoginScreen = ({navigation: {navigate}}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  const [signin, {data}] = useMutation(SIGNIN_MUTATION);

  const handleSubmit = async e => {
    try {
      setSubmitLoading(true);
      const res = await signin({
        variables: {email, password},
      });
      console.log(res);
      setSubmitLoading(false);
      navigate('main');
    } catch (err) {
      console.log(err);
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
      <Button loading={submitLoading} onPress={handleSubmit} title="Sign in" />
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
