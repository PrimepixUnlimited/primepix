import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from 'react-native-elements';

import Header from '../../components/Header';
import SubHeading from '../../components/SubHeading';
import TabBarIcon from '../../components/TabBarIcon';

import styles from '../../constants/styles';

const NotificationsScreen = () => {
  return (
    <ScrollView style={styles.common.screenContainer}>
      <SubHeading>Notifications</SubHeading>
      {/* <Text style={styles.text.body}>Gallery Screen</Text> */}
    </ScrollView>
  );
};

NotificationsScreen.navigationOptions = ({navigation}) => ({
  header: <Header showProfile showMenu title="Gallery" />,
  tabBarIcon: ({focused}) => (
    <TabBarIcon name="bell" type="font-awesome" focused={focused} />
  ),
  tabBarLabel: 'Notifications',
});

export default NotificationsScreen;
