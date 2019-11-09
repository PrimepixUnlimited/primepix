import { Alert } from 'react-native'
import stripe from 'tipsi-stripe'
import { STRIPE_PUBLIC_KEY } from 'react-native-dotenv'

export default async () => {
  try {
    await stripe.setOptions({
      publishableKey: STRIPE_PUBLIC_KEY
    })
  } catch (e) {
    console.warn(e.message)
    Alert.alert(e.message)
  }
}
