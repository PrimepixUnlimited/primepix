import stripe from 'tipsi-stripe';
import Config from 'react-native-config';

export default () => {
  stripe.setOptions({
    publishableKey: Config.STRIPE_PUBLIC_KEY,
  });
};
