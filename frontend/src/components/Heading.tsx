import React, { FC } from "react";
import { Text } from "react-native-elements";

interface Props {
  children: string | number;
  size?: string;
}

import styles from "../constants/styles";

const Heading: FC<Props> = ({ children, size = "h4" }) => (
  <Text {...size} style={styles.text.body}>
    {children}
  </Text>
);

export default Heading;
