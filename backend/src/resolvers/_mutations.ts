import { signup, signin, signout, verifyEmail } from './auth'
import {
  createPaymentMethod,
  createSubscription,
  updateSubscription
} from './payments'
import {
  createPhoto,
  updatePhoto,
  softRemovePhoto,
  removePhoto
} from './photos'

const Mutation = {
  // auth
  signup,
  signin,
  signout,
  verifyEmail,
  // payments
  createPaymentMethod,
  createSubscription,
  updateSubscription,
  // photos
  createPhoto,
  updatePhoto,
  softRemovePhoto,
  removePhoto
}

export default Mutation
