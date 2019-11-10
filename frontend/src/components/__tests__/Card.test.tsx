// components/__tests__/Hello.tsx
import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Card from '../Card'
import Icon from '../Icon'

describe('Card snapshot', () => {
  it('renders correctly', () => {
    const card = renderer
      .create(
        <Card
          featuredSubtitle="Featured Subtitle"
          featuredTitle="Featured Title"
          title="Title"
        />
      )
      .toJSON()
    expect(card).toMatchSnapshot()
  })
})
