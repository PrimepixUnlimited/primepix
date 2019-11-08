import React, { FC, ReactChild } from 'react'
import { StyleSheet, View } from 'react-native'

interface Props {
  children: string | number
  size?: string
}

import Heading from './Heading'

import styles from '../constants/styles'

const SubHeading: FC<Props> = ({ children, size = 'h4' }) => (
  <View style={s.container}>
    <Heading size={size}>{children}</Heading>
  </View>
)

const s = StyleSheet.create({
  container: {
    backgroundColor: styles.greyScale.black2,
    padding: 15,
    paddingTop: 30
  }
})

export default SubHeading
