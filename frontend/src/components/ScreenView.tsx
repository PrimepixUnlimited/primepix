import React, { FC, ReactNode } from 'react'
import { ScrollView, View } from 'react-native'

interface Props {
  children: ReactNode
  heading: string
}

import SubHeading from './SubHeading'

import styles from '../constants/styles'

const ScreenView: FC<Props> = ({ heading, children }) => (
  <ScrollView
    contentContainerStyle={styles.common.screenStyle}
    style={styles.common.screenContainer}
  >
    <SubHeading>{heading}</SubHeading>
    <View
      style={[
        styles.common.contentContainer,
        styles.common.contentPaddingHorizontal,
        styles.common.centeredItems
      ]}
    >
      {children}
    </View>
  </ScrollView>
)

export default ScreenView
