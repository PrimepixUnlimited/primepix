import React, { FC, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

import Badge from './Badge'

import styles from '../constants/styles'

interface Props {
  button?: ReactNode
  currency: string
  discount?: number
  info: {
    title: string
    active: boolean
  }[]
  isActive?: boolean
  period?: string
  price: string
  title: string
}

const PricingCardWrapper: FC<Props> = ({
  button,
  currency,
  discount,
  info,
  isActive,
  period,
  price,
  title
}) => (
  <View style={s.container}>
    <View style={s.headingContainer}>
      {isActive && (
        <Badge
          status="success"
          containerStyle={{ position: 'absolute', top: -4, right: -4 }}
        />
      )}
      <Text style={s.headingText}>{title}</Text>
    </View>
    <View style={{ padding: 20, alignItems: 'center' }}>
      <View style={s.priceContainer}>
        <Text style={s.currencyText}>{currency}</Text>
        <Text style={s.priceText}>{price}</Text>
        <Text style={[s.currencyText, { alignSelf: 'flex-end' }]}>.00</Text>
      </View>
      {discount && <Text style={s.discountText}>Save up to {discount}%</Text>}
      <View style={{ marginVertical: 25 }}>
        {info.map((feature, idx) => (
          <Text
            key={idx}
            style={[s.featureText, style(feature.active).featureText]}
          >
            {feature.title}
          </Text>
        ))}
      </View>
      {button}
    </View>
  </View>
)

const s = StyleSheet.create({
  container: {
    backgroundColor: styles.greyScale.black2,
    marginBottom: 20
  },
  headingContainer: {
    backgroundColor: styles.greyScaleOpacity(0.05).white,
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
  currencyText: {
    color: styles.greyScale.white,
    fontSize: 24,
    marginTop: 8
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 56,
    marginBottom: 10
  },
  priceText: {
    color: styles.colors.success,
    fontSize: 52
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
    lineHeight: 20
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
