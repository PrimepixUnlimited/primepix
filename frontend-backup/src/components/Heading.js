import React from 'react';
import {Text} from 'react-native-elements';

import styles from '../constants/styles';

const Heading = ({children, size}) => {
  switch (size) {
    case 'h1':
      return (
        <Text h1 style={styles.text.body}>
          {children}
        </Text>
      );
    case 'h2':
      return (
        <Text h2 style={styles.text.body}>
          {children}
        </Text>
      );
    case 'h3':
      return (
        <Text h3 style={styles.text.body}>
          {children}
        </Text>
      );
    case 'h4':
      return (
        <Text h4 style={styles.text.body}>
          {children}
        </Text>
      );
  }
};

Heading.defaultProps = {
  size: 'h4',
};

export default Heading;
