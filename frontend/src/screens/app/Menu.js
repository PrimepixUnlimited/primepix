import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ListItem, Text} from 'react-native-elements';

import Header from '../../components/Header';

import styles from '../../constants/styles';

const MENU_LINKS = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
];

const SETTINGS = [
  {
    title: 'Dark Mode',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
];

const MenuScreen = () => (
  <ScrollView style={styles.common.screenContainer}>
    <Text h4 style={styles.text.body}>
      App
    </Text>
    {MENU_LINKS.map(({icon, title}, i) => (
      <ListItem
        containerStyle={s.container}
        key={i}
        title={title}
        leftIcon={{color: '#c8d0d8', name: icon}}
        bottomDivider
        chevron
        titleStyle={{color: 'white'}}
      />
    ))}
    <Text h4 style={styles.text.body}>
      Settings
    </Text>
    {SETTINGS.map(({icon, title}, i) => (
      <ListItem
        containerStyle={s.container}
        key={i}
        title={title}
        leftIcon={{color: '#c8d0d8', name: icon}}
        bottomDivider
        chevron
        titleStyle={{color: 'white'}}
      />
    ))}
  </ScrollView>
);

MenuScreen.navigationOptions = ({navigation}) => ({
  header: <Header showBack title="Navigation" />,
});

const s = StyleSheet.create({
  container: {
    backgroundColor: styles.greyScale.black1,
  },
});

export default MenuScreen;
