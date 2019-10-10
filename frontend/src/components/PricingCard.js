import React from 'react';
import {PricingCard} from 'react-native-elements';

const PricingCardWrapper = ({
  button,
  color,
  info,
  onButtonPress,
  price,
  title,
}) => (
  <PricingCard
    button={button}
    color={color}
    info={info}
    onButtonPress={onButtonPress}
    price={price}
    title={title}
  />
);

export default PricingCardWrapper;
