import React, { FC, ReactNode } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
  colors?: string[]
  children: ReactNode
  start: { x: number; y: number }
  end: { x: number; y: number }
}

const LinearGradientWrapper = ({
  children,
  colors = ['#4c669f', '#3b5998', '#192f6a']
}) => {
  return <LinearGradient colors={colors}>{children}</LinearGradient>
}

export default LinearGradientWrapper

const styles = StyleSheet.create({
  container: {}
})
