import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import ActionSheet from './ActionSheet';

const MainTabBar = props => {
  const {
    activeTintColor,
    inactiveTintColor,
    navigation: {navigate, state},
    renderIcon,
  } = props;

  const tabBarButton = (route, idx) => {
    const currentIndex = state.index;
    const color = currentIndex === idx ? activeTintColor : inactiveTintColor;

    const handleTabPress = e => navigate(route.key);

    const TabBarIcon = () =>
      renderIcon({
        route,
        tintColor: color,
        focused: currentIndex === idx,
        index: idx,
      });

    return (
      <TouchableOpacity
        style={s.tabBarButton}
        key={route.routeName}
        onPress={handleTabPress}>
        <TabBarIcon />
      </TouchableOpacity>
    );
  };

  const tabBarButtons = state.routes.map(tabBarButton);

  return <View style={s.container}>{tabBarButtons}</View>;
};

const TAB_BAR_HEIGHT = 80;

const s = StyleSheet.create({
  container: {
    backgroundColor: '#18191C',
    alignItems: 'center',
    flexDirection: 'row',
    height: TAB_BAR_HEIGHT,
    justifyContent: 'center',
    shadowColor: '#18191C',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 23,
  },
  tabBarButton: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    height: TAB_BAR_HEIGHT,
    justifyContent: 'flex-start',
    padding: 15,
  },
  tabBarButtonText: {
    alignItems: 'center',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default MainTabBar;
