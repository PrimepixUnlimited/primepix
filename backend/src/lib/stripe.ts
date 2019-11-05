import * as Stripe from 'stripe'

const stripe = Stripe(process.env.STRIPE_SECRET)

export default stripe
