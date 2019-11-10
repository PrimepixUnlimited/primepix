import React, { FC, ReactNode } from 'react'
import ActionSheet from '@selcouth-digital/react-native-action-sheet'

interface Props {
  CancelButton: ReactNode
  onDismiss: () => void
  options: {
    onPress: () => void
    title: string
  }[]
  visible: boolean
}

const ActionSheetWrapper: FC<Props> = ({
  CancelButton,
  onDismiss,
  options,
  visible
}) => (
  <ActionSheet
    CancelButton={CancelButton}
    onDismiss={onDismiss}
    options={options}
    visible={visible}
  />
)

export default ActionSheetWrapper
