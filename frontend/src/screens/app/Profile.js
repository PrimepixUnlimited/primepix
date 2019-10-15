import React from 'react';
import {ScrollView, View} from 'react-native';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Header from '../../components/Header';
import SubHeading from '../../components/SubHeading';
import Button from '../../components/Button';

import styles from '../../constants/styles';

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;

const ProfileScreen = ({navigation: {navigate}}) => {
  const [signout] = useMutation(SIGNOUT_MUTATION);

  const handleSignOut = async () => {
    const {data} = await signout();
    if (data.signout.message) {
      console.log(data.signout.message);
    }
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
