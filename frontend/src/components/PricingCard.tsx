import React, { FC } from 'react'
import { PricingCard, PricingCardProps } from 'react-native-elements'

interface Props extends PricingCardProps {
  // custom props
}

const PricingCardWrapper: FC<Props> = ({
  button,
  color,
  containerStyle,
  info,
  onButtonPress,
  price,
  title
}) => (
  <PricingCard
    button={button}
    color={color}
    containerStyle={containerStyle}
    info={info}
    onButtonPress={onButtonPress}
    price={price}
    title={title}
  />
)

export default PricingCardWrapper
