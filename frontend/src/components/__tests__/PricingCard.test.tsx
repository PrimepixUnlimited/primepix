// components/__tests__/Hello.tsx
import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import PricingCard from '../PricingCard'

const info = [
  {
    title: '5 Products',
    active: true
  },
  {
    title: 'Payout once a month',
    active: true
  },
  {
    title: 'Full Support',
    active: false
  },
  {
    title: 'All Core Features',
    active: true
  }
]

describe('PricingCard snapshot', () => {
  it('renders correctly', () => {
    const pricingCard = renderer
      .create(<PricingCard currency="£" info={info} price="30" title="Basic" />)
      .toJSON()
    expect(pricingCard).toMatchSnapshot()
  })
})
