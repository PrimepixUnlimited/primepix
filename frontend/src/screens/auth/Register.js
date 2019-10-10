import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import Header from '../../components/Header';
import SubHeading from '../../components/SubHeading';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

import styles from '../../constants/styles';

const RegisterSCreen = ({navigation: {navigate}}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isArtist, setIsArtist] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = e => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // navigate('main')
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
          placeholder="Email"
          textContentType="username"
          value={email}
        />
        <Input
          containerStyle={styles.space.m}
          label="Password"
          leftIconName="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          value={password}
        />
        <Input
          containerStyle={styles.space.s}
          label="Confirm password"
          leftIconName="lock"
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
        <Button loading={loading} onPress={handleSubmit} title="Register" />
        <Button
          onPress={e => navigate('signin')}
          title="Have an account? Sign in"
          type="clear"
        />
      </View>
    </ScrollView>
  );
};

RegisterSCreen.navigationOptions = ({navigation}) => ({
  header: <Header showBack title="Login" />,
});

export default RegisterSCreen;
