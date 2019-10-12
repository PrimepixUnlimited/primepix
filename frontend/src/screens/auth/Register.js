import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Header from '../../components/Header';
import SubHeading from '../../components/SubHeading';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

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

const RegisterSCreen = ({navigation: {navigate}}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [isArtist, setIsArtist] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [signup] = useMutation(SIGNUP_MUTATION);

  const handleSubmit = async e => {
    try {
      setSubmitLoading(true);
      await signup({
        variables: {email, password, confirmPassword, isArtist},
      });
      setSubmitLoading(false);
      navigate('main');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView style={styles.common.screenContainer}>
      <SubHeading>Register</SubHeading>
      <View
        style={[
          styles.common.contentContainer,
          styles.common.contentPaddingHorizontal,
        ]}>
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
          loading={submitLoading}
          onPress={handleSubmit}
          title="Register"
        />
        <Button
          onPress={e => navigate('signin')}
          title="Have an account? Sign in"
          type="clear"
        />
        <View style={styles.space.xxl} />
      </View>
    </ScrollView>
  );
};

RegisterSCreen.navigationOptions = ({navigation}) => ({
  header: <Header showBack title="Login" />,
});

export default RegisterSCreen;
