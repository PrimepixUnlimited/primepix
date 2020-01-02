import React, { FC } from 'react'
import { Icon, IconProps } from 'react-native-elements'

interface Props extends IconProps {
  focused?: boolean
}

import styles from '../constants/styles'

const TabBarIcon: FC<Props> = ({ focused, name, raised, size, type }) => {
  const fontColor = focused ? styles.colors.tertiary : raised ? 'black' : '#ccc'
  return (
    <Icon
      color={fontColor}
      containerStyle={raised && { top: -30 }}
      name={name}
      raised={raised}
      size={size}
      type={type}
    />
  )
}

export default TabBarIcon
