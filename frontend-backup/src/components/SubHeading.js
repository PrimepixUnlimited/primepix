import React from 'react';
import {StyleSheet, View} from 'react-native';

import Heading from './Heading';

import styles from '../constants/styles';

const SubHeading = ({children, size}) => (
  <View style={s.container}>
    <Heading size={size}>{children}</Heading>
  </View>
);

const s = StyleSheet.create({
  container: {
    backgroundColor: styles.greyScale.black2,
    padding: 15,
    paddingTop: 30,
  },
});

export default SubHeading;
