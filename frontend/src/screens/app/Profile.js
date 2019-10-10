import React from 'react';
import {ScrollView, View} from 'react-native';

import Header from '../../components/Header';
import SubHeading from '../../components/SubHeading';
import Button from '../../components/Button';

import styles from '../../constants/styles';

const ProfileScreen = ({navigation: {navigate}}) => {
  const handleSignOut = () => {
    navigate('landing');
  };
  return (
    <ScrollView
      style={[styles.common.screenContainer, styles.common.fullHeight]}>
      <SubHeading>Your profile</SubHeading>
      <View
        style={[
          styles.common.contentContainer,
          styles.common.contentPaddingHorizontal,
        ]}>
        <Button onPress={handleSignOut} title="Sign out" />
      </View>
    </ScrollView>
  );
};

ProfileScreen.navigationOptions = ({navigation}) => ({
  header: <Header showBack title="Navigation" />,
});

export default ProfileScreen;
