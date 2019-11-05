import React from 'react';
import {Button} from 'react-native-elements';

const ButtonWrapper = ({
  buttonStyle,
  containerStyle,
  disabled,
  disabledStyle,
  disabledTitleStyle,
  icon,
  iconContainerStyle,
  iconRight,
  linearGradientProps,
  loading,
  loadingProps,
  loadingStyle,
  onPress,
  raised,
  title,
  titleProps,
  titleStyle,
  type,
  TouchableComponent,
  ViewComponent,
}) => (
  <Button
    buttonStyle={buttonStyle}
    containerStyle={containerStyle}
    disabled={disabled}
    disabledStyle={disabledStyle}
    disabledTitleStyle={disabledTitleStyle}
    icon={icon}
    iconContainerStyle={iconContainerStyle}
    iconRight={iconRight}
    linearGradientProps={linearGradientProps}
    loading={loading}
    loadingProps={loadingProps}
    loadingStyle={loadingStyle}
    onPress={onPress}
    raised={raised}
    title={title}
    titleProps={titleProps}
    titleStyle={titleStyle}
    type={type}
    TouchableComponent={TouchableComponent}
    ViewComponent={ViewComponent}
  />
);

export default ButtonWrapper;
