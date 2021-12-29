import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../styles/theme/theme";
import styles from "./StatusIndicator.style";

export default function StatusIndicator({
  icon = "star",
  iconSize = 45,
  color = theme.MAIN_RED,
  message = "",
}) {
  return (
    <View style={styles.emptyContainer}>
      <Icon name={icon} size={iconSize} color={color} />
      <Text
        style={[
          styles.title,
          {
            color,
          },
        ]}>
        {message}
      </Text>
    </View>
  );
}
