import React from 'react';
import {Icon} from 'react-native-elements';

import styles from '../constants/styles';

const TabBarIcon = ({focused, name, raised, size, type}) => {
  const fontColor = focused ? styles.colors.primary : raised ? 'black' : '#ccc';
  return (
    <Icon
      color={fontColor}
      containerStyle={raised && {top: -30}}
      name={name}
      raised={raised}
      size={size}
      type={type}
    />
  );
};

export default TabBarIcon;
