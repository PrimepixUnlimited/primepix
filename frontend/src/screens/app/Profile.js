import React from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {useMutation, useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Header from '../../components/Header';
import SubHeading from '../../components/SubHeading';
import Button from '../../components/Button';

import asyncStorage from '../../lib/async-storage';
import styles from '../../constants/styles';

const ME_QUERY = gql`
  query ME_QUERY {
    me {
      id
      email
    }
  }
`;

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;

const ProfileScreen = ({navigation: {navigate}}) => {
  const {data} = useQuery(ME_QUERY);
  const [signout, {loading}] = useMutation(SIGNOUT_MUTATION);

  console.log(data);

  const handleSignOut = async () => {
    try {
      const {
        data: {
          signout: {message},
        },
      } = await signout();
      if (message) {
        console.log(message);
        await asyncStorage.clearAll();
        navigate('landing');
      }
    } catch (err) {
      Alert.alert('Error', err.message);
    }
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
        <Button loading={loading} onPress={handleSignOut} title="Sign out" />
      </View>
    </ScrollView>
  );
};

ProfileScreen.navigationOptions = ({navigation}) => ({
  header: <Header showBack title="Navigation" />,
});

export default ProfileScreen;
