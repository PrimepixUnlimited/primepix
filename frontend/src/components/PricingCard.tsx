import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { PricingCard, PricingCardProps, Text } from 'react-native-elements'

import Button from './Button'
import Icon from './Icon'

import styles from '../constants/styles'

interface Props {
  discount: number
  info: {
    title: string
    active: boolean
  }[]
  period: string
  price: string
  title: string
  onSelect: () => Promise<boolean>
}

const PricingCardWrapper: FC<Props> = ({
  discount = null,
  info,
  onSelect,
  period,
  price,
  title
}) => (
  <View style={s.container}>
    <View style={s.headingContainer}>
      <Text style={s.headingText}>{title}</Text>
    </View>
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text style={s.priceText}>{price}</Text>
      <Text style={s.periodText}>{period.toUpperCase()}</Text>
      {discount && <Text style={s.discountText}>Save up to {discount}%</Text>}
      <View style={{ marginBottom: 25 }}>
        {info.map(feature => (
          <Text style={[s.featureText, style(feature.active).featureText]}>
            {feature.title}
          </Text>
        ))}
      </View>
      <Button
        onPress={onSelect}
        titleStyle={{ color: '#0bd685', fontSize: 14 }}
        title={`Get started now`.toUpperCase()}
        iconRight
        icon={
          <Icon
            name="arrow-forward"
            color="#0bd685"
            size={18}
            underlayColor={styles.greyScale.black2}
          />
        }
        type="clear"
      />
    </View>
  </View>
)

const s = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    marginBottom: 20
  },
  headingContainer: {
    backgroundColor: '#2b2b2b',
    alignItems: 'center',
    width: '100%'
  },
  headingText: {
    color: styles.greyScale.white,
    fontSize: 21,
    lineHeight: 35,
    fontWeight: 'bold',
    padding: 20
  },
  priceText: {
    color: styles.greyScale.white,
    fontSize: 52,
    lineHeight: 60,
    marginBottom: 10
  },
  periodText: {
    color: styles.greyScaleOpacity(0.5).white,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 25
  },
  discountText: {
    color: styles.greyScaleOpacity(0.5).white,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 25
  },
  featureText: {
    textAlign: 'center',
    lineHeight: 20,
    paddingVertical: 5
  }
})

const style = (active: boolean) =>
  StyleSheet.create({
    featureText: {
      color: active
        ? styles.greyScale.white
        : styles.greyScaleOpacity(0.5).white,
      textDecorationLine: active ? 'none' : 'line-through'
    }
  })

export default PricingCardWrapper
