import React from 'react';
import ActionSheet from '@selcouth-digital/react-native-action-sheet';

const ActionSheetWrapper = ({CancelButton, onDismiss, options, visible}) => (
  <ActionSheet
    CancelButton={CancelButton}
    onDismiss={onDismiss}
    options={options}
    visible={visible}
  />
);

export default ActionSheetWrapper;
