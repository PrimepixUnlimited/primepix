import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import { Header } from "react-native-elements";
import {
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp
} from "react-navigation";

import ROUTES from "../navigation/_routes";

import Icon from "./Icon";

import styles from "../constants/styles";

interface Props {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
  showBack?: boolean;
  showTitle?: boolean;
  showMenu?: boolean;
  showProfile?: boolean;
  title?: string;
}

const HeaderComponent: FC<Props> = ({
  navigation: { goBack, navigate },
  showBack = false,
  showMenu = false,
  showProfile = false,
  showTitle = true,
  title
}) => {
  const handleBackPress: () => void = () => goBack(null);
  const handleMenuPress: () => void = () => navigate(ROUTES.Menu);
  const handleProfilePress: () => void = () => navigate(ROUTES.Profile);

  const Left: FC = () => {
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

  const Middle: FC = () =>
    showTitle && (
      <TouchableOpacity onPress={() => navigate("landing")}>
        <Image
          source={require("../assets/images/primepix-logo-darkmode.png")}
          style={s.logo}
        />
      </TouchableOpacity>
    );

  const Right: FC = () =>
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
      statusBarProps={{ barStyle: "light-content" }}
      containerStyle={s.container}
    >
      <Left />
      <Middle />
      <Right />
    </Header>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: styles.greyScale.black2,
    borderBottomWidth: 0,
    shadowColor: styles.greyScale.black2,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 23
  },
  leftContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: 150
  },
  icon: {
    backgroundColor: styles.greyScale.black2
  },
  logo: {
    height: 35,
    resizeMode: "cover",
    width: 70
  },
  titleText: {
    color: "white",
    marginLeft: 10
  }
});

export default withNavigation(HeaderComponent);
