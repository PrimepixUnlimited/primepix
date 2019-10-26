import React, {Fragment, useState} from 'react';
import {Alert} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Header from '../../components/Header';
import ScreenView from '../../components/ScreenView';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

import asyncStorage from '../../lib/async-storage';
import styles from '../../constants/styles';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $confirmPassword: String!
    $isArtist: Boolean!
  ) {
    signup(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      isArtist: $isArtist
    ) {
      id
      email
    }
  }
`;
const VERIFY_EMAIL = gql`
  mutation VERIFY_EMAIL($email: String!, $emailConfirmToken: Float!) {
    verifyEmail(email: $email, emailConfirmToken: $emailConfirmToken) {
      token
      user {
        id
        email
      }
    }
  }
`;

const RegisterSCreen = ({navigation: {navigate}}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailConfirmToken, setEmailConfirmToken] = useState(null);
  const [isArtist, setIsArtist] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showConfirmationCode, setShowConfirmationCode] = useState(false);

  const [signup, {loading: signupLoading}] = useMutation(SIGNUP_MUTATION);
  const [verifyEmail, {loading: verifyEmailLoading}] = useMutation(
    VERIFY_EMAIL,
  );

  const handleFormSubmit = async e => {
    try {
      await signup({
        variables: {email, password, confirmPassword, isArtist},
      });
      setShowConfirmationCode(true);
    } catch (err) {
      return Alert.alert('Error', err.message);
    }
  };

  const handleCodeSubmit = async e => {
    try {
      const variables = {
        email,
        emailConfirmToken: Number(emailConfirmToken),
      };
      const {
        data: {
          verifyEmail: {token},
        },
      } = await verifyEmail({variables});
      if (token) {
        await asyncStorage.setToken(token);
        navigate('main');
      }
    } catch (err) {
      return Alert.alert('Error', err.message);
    }
  };

  const renderRegisterForm = () => {
    return (
      <Fragment>
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
        <Input
          containerStyle={styles.space.s}
          label="Confirm password"
          leftIconName="lock"
          onChangeText={val => setConfirmPassword(val)}
          placeholder="Confirm password"
          secureTextEntry
          textContentType="password"
          value={confirmPassword}
        />
        <Checkbox
          checked={isArtist}
          onPress={() => setIsArtist(!isArtist)}
          title="Are you an artist?"
        />
        <Checkbox
          containerStyle={styles.space.l}
          checked={acceptTerms}
          onPress={() => setAcceptTerms(!acceptTerms)}
          title="Accept our Terms & Conditions"
        />
        <Button
          loading={signupLoading}
          onPress={handleFormSubmit}
          title="Register"
        />
        <Button
          onPress={e => navigate('signin')}
          title="Have an account? Sign in"
          type="clear"
        />
      </Fragment>
    );
  };

  const renderConfirmationCode = () => {
    return (
      <Fragment>
        <Input
          containerStyle={styles.space.m}
          label="Confirmation code"
          leftIconName="asterisk"
          leftIconType="font-awesome"
          onChangeText={val => setEmailConfirmToken(val)}
          placeholder="Confirmation code"
          value={emailConfirmToken}
        />
        <Button
          loading={verifyEmailLoading}
          onPress={handleCodeSubmit}
          title="Register"
        />
      </Fragment>
    );
  };

  return (
    <ScreenView heading="Register">
      {!showConfirmationCode ? renderRegisterForm() : renderConfirmationCode()}
    </ScreenView>
  );
};

RegisterSCreen.navigationOptions = ({navigation}) => ({
  header: <Header showBack title="Login" />,
});

export default RegisterSCreen;
