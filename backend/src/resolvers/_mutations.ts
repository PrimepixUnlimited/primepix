import { signup, signin, signout, verifyEmail } from './auth'
import { createPaymentMethod, createSubscription, updateSubscription } from './payments'
import { createImage, updateImage, deleteImage } from './images'

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
  // images
  createImage,
  updateImage,
  deleteImage
}

export default Mutation
