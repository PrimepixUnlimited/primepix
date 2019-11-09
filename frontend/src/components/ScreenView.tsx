import React, { FC, ReactNode } from 'react'
import { ScrollView, View } from 'react-native'

interface Props {
  children: ReactNode
  heading: string
  noPadding?: boolean
}

import SubHeading from './SubHeading'

import styles from '../constants/styles'

const ScreenView: FC<Props> = ({ heading, children, noPadding = false }) => (
  <ScrollView
    contentContainerStyle={styles.common.screenStyle}
    style={styles.common.screenContainer}
  >
    <SubHeading>{heading}</SubHeading>
    <View
      style={[
        styles.common.contentContainer,
        !noPadding && styles.common.contentPaddingHorizontal,
        styles.common.centeredItems
      ]}
    >
      {children}
    </View>
  </ScrollView>
)

export default ScreenView
