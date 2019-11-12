import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { CheckBox, CheckBoxProps } from "react-native-elements";

interface Props extends CheckBoxProps {
  // custom props
}

import styles from "../constants/styles";

const CheckboxWrapper: FC<Props> = ({
  iconType,
  Component,
  checked,
  size,
  iconRight,
  right,
  center,
  title,
  titleProps,
  containerStyle,
  textStyle,
  onLongPress,
  onLongIconPress,
  onPress,
  onIconPress,
  checkedIcon,
  uncheckedIcon,
  checkedColor,
  uncheckedColor = styles.greyScale.white4,
  checkedTitle,
  fontFamily
}) => (
  <CheckBox
    iconType={iconType}
    Component={Component}
    checked={checked}
    size={size}
    iconRight={iconRight}
    right={right}
    center={center}
    title={title}
    titleProps={titleProps}
    containerStyle={StyleSheet.flatten([styles.form.checkbox, containerStyle])}
    textStyle={StyleSheet.flatten([styles.text.body, textStyle])}
    onLongPress={onLongPress}
    onLongIconPress={onLongIconPress}
    onPress={onPress}
    onIconPress={onIconPress}
    checkedIcon={checkedIcon}
    uncheckedIcon={uncheckedIcon}
    checkedColor={checkedColor}
    uncheckedColor={uncheckedColor}
    checkedTitle={checkedTitle}
    fontFamily={fontFamily}
  />
);

export default CheckboxWrapper;
