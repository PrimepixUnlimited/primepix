// components/__tests__/Hello.tsx
import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import ActionSheet from '../ActionSheet'
import Button from '../Button'

describe('ActionSheet snapshot', () => {
  it('renders correctly', () => {
    const actionSheet = renderer
      .create(
        <ActionSheet
          CancelButton={<Button />}
          onDismiss={() => {}}
          options={[{ title: 'Option 1', onPress: () => {} }]}
          visible={true}
        />
      )
      .toJSON()
    expect(actionSheet).toMatchSnapshot()
  })
})
