import {StyleSheet} from 'react-native';

const colors = {
  primary: '#d91c71',
  secondary: '#FF1301',
  success: '#57c32c',
  warning: '#f9ad30',
  error: '#FF1301',
};

const greyScale = {
  black1: '#18191C',
  black2: '#202124',
};

const common = StyleSheet.create({
  screenContainer: {
    backgroundColor: greyScale.black2,
  },
  contentContainer: {
    backgroundColor: greyScale.black1,
    paddingVertical: 30,
  },
});

const text = StyleSheet.create({
  body: {
    color: 'white',
  },
});

const theme = {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    grey0: greyScale.grey0,
    grey1: greyScale.grey1,
    grey2: greyScale.grey2,
    grey3: greyScale.grey3,
    grey4: greyScale.grey4,
    grey5: greyScale.grey5,
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
    divider: colors.divider,
  },
};

export default {
  colors,
  greyScale,
  common,
  text,
  theme,
};
