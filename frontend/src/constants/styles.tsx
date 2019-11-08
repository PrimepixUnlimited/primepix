import { StyleSheet } from 'react-native'

const UNIT = 15

const colors = {
  primary: '#d91c71',
  secondary: '#FF1301',
  tertiary: '#7D00B3',
  success: '#57c32c',
  warning: '#f9ad30',
  error: '#FF1301'
}

const greyScale = {
  black1: '#18191C',
  black2: '#202124',
  white: '#fff',
  white4: '#3b423b'
}

const rainbow = [greyScale.black1, colors.tertiary, colors.primary]

const common = StyleSheet.create({
  screenStyle: {
    flexGrow: 1
  },
  screenContainer: {
    backgroundColor: greyScale.black2
  },
  contentContainer: {
    backgroundColor: greyScale.black1,
    paddingVertical: UNIT * 3,
    flex: 1
  },
  contentPaddingHorizontal: {
    paddingHorizontal: 15
  },
  centeredItems: {
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

const form = StyleSheet.create({
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: 0,
    paddingHorizontal: 0
  },
  input: {
    color: greyScale.white
  },
  label: {
    color: greyScale.white
  }
})

const space = StyleSheet.create({
  xs: { marginBottom: UNIT / 2 },
  s: { marginBottom: UNIT },
  m: { marginBottom: UNIT * 2 },
  l: { marginBottom: UNIT * 3 },
  xl: { marginBottom: UNIT * 4 },
  xxl: { marginBottom: UNIT * 5 }
})

const text = StyleSheet.create({
  body: {
    color: greyScale.white,
    fontSize: 16
  },
  important: {
    // fontFamily: require('typeface-nunito-sans'),
    fontSize: 22
  }
})

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
    divider: colors.divider
  }
}

const utils = {
  noHorizontalPadding: {
    paddingHorizontal: 0
  }
}

export default {
  colors,
  greyScale,
  common,
  form,
  rainbow,
  space,
  text,
  theme,
  utils
}
