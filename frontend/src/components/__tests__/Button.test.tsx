// components/__tests__/Hello.tsx
import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Button from '../Button'
import Icon from '../Icon'

describe('Button snapshot', () => {
  it('renders correctly', () => {
    const button = renderer
      .create(
        <Button
          loading={false}
          onPress={() => {}}
          titleStyle={{ color: '#0bd685', fontSize: 14 }}
          title={`Get started now`.toUpperCase()}
          iconRight
          icon={<Icon name="arrow-forward" color="#0bd685" size={18} />}
          type="clear"
          disabled
          raised
        />
      )
      .toJSON()
    expect(button).toMatchSnapshot()
  })
})
