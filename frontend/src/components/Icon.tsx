import React, { FC } from 'react'
import { Icon, IconProps } from 'react-native-elements'

interface Props extends IconProps {
  // custom props
}

const IconWrapper: FC<Props> = ({
  color,
  containerStyle,
  name,
  onPress,
  size,
  type,
  underlayColor
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
)

export default IconWrapper
