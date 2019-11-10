// components/__tests__/Hello.tsx
import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Badge from '../Badge'

describe('Badge snapshot', () => {
  it('renders correctly', () => {
    const badge = renderer
      .create(<Badge status="success" value={123} />)
      .toJSON()
    expect(badge).toMatchSnapshot()
  })
})
