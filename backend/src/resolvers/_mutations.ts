import { signup, signin, signout, verifyEmail } from './auth'
import { createPaymentMethod, createSubscription, updateSubscription } from './payments'

const Mutation = {
  // auth
  signup,
  signin,
  signout,
  verifyEmail,
  // payments
  createPaymentMethod,
  createSubscription,
  updateSubscription
}

export default Mutation
