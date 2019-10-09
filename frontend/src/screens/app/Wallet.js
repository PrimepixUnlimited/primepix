import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from 'react-native-elements';

import Header from '../../components/Header';
import SubHeading from '../../components/SubHeading';

import styles from '../../constants/styles';

const WalletScreen = () => {
  return (
    <ScrollView style={styles.common.screenContainer}>
      <SubHeading>Wallet</SubHeading>
      {/* <Text style={styles.text.body}>Wallet Screen</Text> */}
    </ScrollView>
  );
};

WalletScreen.navigationOptions = ({navigation}) => ({
  header: <Header showProfile showMenu title="Wallet" />,
});

export default WalletScreen;
