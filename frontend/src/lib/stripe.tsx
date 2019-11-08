import stripe from 'tipsi-stripe'
import { STRIPE_PUBLIC_KEY } from 'react-native-dotenv'

export default () => {
  stripe.setOptions({
    publishableKey: STRIPE_PUBLIC_KEY
  })
}
