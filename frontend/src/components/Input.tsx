import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Input, InputProps } from 'react-native-elements'

interface Props extends InputProps {
  leftIconName?: string
  leftIconType?: string
  rightIconName?: string
  rightIconType?: string
}

import styles from '../constants/styles'

const InputWrapper: FC<Props> = ({
  containerStyle,
  disabled,
  disabledInputStyle,
  inputContainerStyle,
  errorMessage,
  errorStyle,
  errorProps,
  inputComponent,
  inputStyle = styles.form.input,
  label,
  labelStyle = styles.form.label,
  labelProps,
  leftIconName,
  leftIconContainerStyle,
  leftIconType,
  placeholder,
  rightIconName,
  rightIconContainerStyle,
  rightIconType,
  secureTextEntry,
  ...props
}) => {
  const leftIcon = {
    color: styles.greyScale.white4,
    name: leftIconName,
    size: 18,
    type: leftIconType
  }
  const rightIcon = {
    color: styles.greyScale.white4,
    name: rightIconName,
    size: 18,
    type: rightIconType
  }
  return (
    <Input
      {...props}
      containerStyle={StyleSheet.flatten([
        styles.utils.noHorizontalPadding,
        containerStyle
      ])}
      disabled={disabled}
      disabledInputStyle={disabledInputStyle}
      inputContainerStyle={StyleSheet.flatten([
        inputContainerStyle,
        { borderColor: styles.greyScale.black2 }
      ])}
      errorMessage={errorMessage}
      errorStyle={errorStyle}
      errorProps={errorProps}
      inputComponent={inputComponent}
      inputStyle={StyleSheet.flatten([inputStyle, { borderColor: '#ccc' }])}
      label={label}
      labelStyle={labelStyle}
      labelProps={labelProps}
      leftIcon={leftIcon}
      leftIconContainerStyle={StyleSheet.flatten([
        { marginLeft: 0, marginRight: 10 },
        leftIconContainerStyle
      ])}
      placeholder={placeholder}
      placeholderTextColor={styles.greyScale.white4}
      rightIcon={rightIcon}
      rightIconContainerStyle={rightIconContainerStyle}
      secureTextEntry={secureTextEntry}
    />
  )
}

export default InputWrapper
