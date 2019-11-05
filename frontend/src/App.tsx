import React from 'react'

import configureApp from './lib/app-config'
import configureStripe from './lib/stripe'

import Navigation from './navigation'

configureApp()
configureStripe()

const Root = () => {
  return <Navigation />
}

export default Root
