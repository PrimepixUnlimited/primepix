import React from 'react';
import {Badge} from 'react-native-elements';

const BadgeWrapper = ({badgeStyle, containerStyle, status, value}) => (
  <Badge
    badgeStyle={badgeStyle}
    status={status}
    containerStyle={containerStyle}
    value={value}
  />
);

export default BadgeWrapper;
