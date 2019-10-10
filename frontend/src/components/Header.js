import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import {Header} from 'react-native-elements';

import Icon from './Icon';

import styles from '../constants/styles';

const HeaderComponent = ({
  navigation: {goBack, navigate},
  showBack,
  showTitle,
  showMenu,
  showProfile,
  title,
}) => {
  const handleBackPress = e => goBack();
  const handleMenuPress = e => navigate('menu');
  const handleProfilePress = e => navigate('profile');

  const Left = () => {
    return (
      <View style={s.leftContainer}>
        {showBack && (
          <Icon
            name="arrow-back"
            color="white"
            onPress={handleBackPress}
            underlayColor={styles.greyScale.black2}
          />
        )}

        {showMenu && (
          <Icon
            containerStyle={s.icon}
            name="menu"
            color="white"
            onPress={handleMenuPress}
            underlayColor={styles.greyScale.black2}
          />
        )}

        {/* {showTitle && (
          <Text h5 style={s.titleText}>
            {title}
          </Text>
        )} */}
      </View>
    );
  };

  const Middle = () =>
    showTitle && (
      <Image
        source={require('../assets/images/primepix-logo-darkmode.png')}
        style={s.logo}
      />
    );

  const Right = () =>
    showProfile && (
      <Icon
        containerStyle={s.icon}
        name="ios-person"
        color="white"
        type="ionicon"
        onPress={handleProfilePress}
        underlayColor={styles.greyScale.black2}
      />
    );

  return (
    <Header
      statusBarProps={{barStyle: 'light-content'}}
      containerStyle={s.container}>
      <Left />
      <Middle />
      <Right />
    </Header>
  );
};

HeaderComponent.propTypes = {
  showBack: PropTypes.bool,
  showProfile: PropTypes.bool,
  showMenu: PropTypes.bool,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
};

HeaderComponent.defaultProps = {
  showBack: false,
  showProfile: false,
  showMenu: false,
  showTitle: true,
};

const s = StyleSheet.create({
  container: {
    backgroundColor: styles.greyScale.black2,
    borderBottomWidth: 0,
    shadowColor: styles.greyScale.black2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 23,
  },
  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
  },
  icon: {
    backgroundColor: styles.greyScale.black2,
  },
  logo: {
    height: 35,
    resizeMode: 'cover',
    width: 70,
  },
  titleText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default withNavigation(HeaderComponent);
