import React, { FC, ReactNode } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Icon from './Icon'

import styles from '../constants/styles'

interface Props {
  children: ReactNode
  type: string
}

const Panel: FC<Props> = ({ children, type }) => {
  const containerTypeStyles = {
    borderColor: styles.colors[type]
  }

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <Icon name="check" />
      case 'error':
        return (
          <Icon
            color={styles.colors[type]}
            name="exclamation-circle"
            type="font-awesome"
            containerStyle={{ width: '20%' }}
          />
        )
      default:
        return null
    }
  }

  const renderIconContainer = () => (
    <View style={s.iconContainer}>
      {renderIcon()}
      <Text
        style={{
          color: styles.colors[type],
          fontSize: 22,
          fontWeight: 'bold',
          lineHeight: 35,
          width: '80%'
        }}
      >
        {children}
      </Text>
    </View>
  )

  return (
    <View style={[s.container, containerTypeStyles]}>
      {renderIconContainer()}
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 15
  },
  iconContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default Panel
