import * as React from 'react'
import { View } from 'react-native'

import styles from '../../constants/styles'

interface LoadingPlansProps {}

const LoadingPlans: React.SFC<LoadingPlansProps> = props => (
  <View style={{ flexDirection: 'column', alignItems: 'center' }}>
    <View
      style={{
        backgroundColor: styles.greyScaleOpacity(0.1).white,
        height: 42,
        marginBottom: 10,
        width: '80%'
      }}
    />
    <View
      style={{
        backgroundColor: styles.greyScaleOpacity(0.1).white,
        height: 42,
        marginBottom: 30,
        width: '45%'
      }}
    />
    <View
      style={{
        backgroundColor: styles.greyScaleOpacity(0.1).white,
        height: 18,
        marginBottom: 10,
        width: '70%'
      }}
    />
    <View
      style={{
        backgroundColor: styles.greyScaleOpacity(0.1).white,
        height: 18,
        marginBottom: 40,
        width: '90%'
      }}
    />
    <View
      style={{
        backgroundColor: styles.greyScaleOpacity(0.1).white,
        height: 300,
        width: '100%'
      }}
    />
  </View>
)

export default LoadingPlans
