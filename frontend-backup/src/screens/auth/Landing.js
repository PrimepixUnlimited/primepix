import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

import Header from '../../components/Header';
import ScreenView from '../../components/ScreenView';
import Button from '../../components/Button';

import styles from '../../constants/styles';

const LandingScreen = ({navigation: {navigate}}) => {
  return (
    <ScreenView heading="Welcome">
      <View style={styles.space.m}>
        <Text style={[styles.text.body, styles.space.s]}>
          Welcome to Primepix!
        </Text>
        <Text style={styles.text.body}>
          Follow one of the options below to continue
        </Text>
      </View>
      <Button
        containerStyle={styles.space.s}
        onPress={e => navigate('signin')}
        title="Sign in"
      />
      <Button
        containerStyle={styles.space.s}
        onPress={e => navigate('signup')}
        title="Register"
        type="outline"
      />
      <Button
        containerStyle={styles.space.s}
        title="Lost your account?"
        type="clear"
      />
    </ScreenView>
  );
};

LandingScreen.navigationOptions = ({navigation}) => ({
  header: <Header title="Gallery" />,
});

export default LandingScreen;
