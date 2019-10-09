import React from 'react';
import {PricingCard} from 'react-native-elements';
import {ScrollView} from 'react-native';

import Header from '../../components/Header';

import styles from '../../constants/styles';

const LoginScreen = ({navigation: {navigate}}) => {
  const handleLogin = e => navigate('main');
  return (
    <ScrollView style={styles.common.screenContainer}>
      <PricingCard
        button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
        color="#4f9deb"
        info={['1 User', 'Basic Support', 'All Core Features']}
        onButtonPress={handleLogin}
        price="$0"
        title="Free"
      />
    </ScrollView>
  );
};

LoginScreen.navigationOptions = ({navigation}) => ({
  header: <Header title="Login" />,
});

export default LoginScreen;
