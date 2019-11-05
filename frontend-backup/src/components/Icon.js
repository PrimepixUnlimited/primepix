import React from 'react';
import {Icon} from 'react-native-elements';

const IconWrapper = ({
  color,
  containerStyle,
  name,
  onPress,
  size,
  type,
  underlayColor,
}) => (
  <Icon
    color={color}
    containerStyle={containerStyle}
    name={name}
    onPress={onPress}
    size={size}
    type={type}
    underlayColor={underlayColor}
  />
);

export default IconWrapper;
