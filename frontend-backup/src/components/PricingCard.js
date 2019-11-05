import React from 'react';
import {PricingCard} from 'react-native-elements';

const PricingCardWrapper = ({
  button,
  color,
  containerStyle,
  info,
  onButtonPress,
  price,
  title,
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
);

export default PricingCardWrapper;
