import React, { FC } from 'react'
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native'

interface Props {
  loading: boolean
}

import styles from '../constants/styles'

const LoadingIndicator: FC<Props> = ({ loading = false }) =>
  loading && (
    <View style={s.container}>
      <ActivityIndicator size="small" color={styles.colors.primary} />
      <Text style={styles.text.body}>Loading...</Text>
    </View>
  )

export default LoadingIndicator

const s = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})
