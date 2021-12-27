import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../../styles/theme/theme";

export default function IconButton({
  icon,
  onPress = null,
  iconStyle = {},
  size = 24,
  color = "#fff",
}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={icon}
          style={[styles.icon, iconStyle]}
          size={size}
          color={color}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  icon: {
    borderRadius: 25,
    backgroundColor: theme.MAIN_RED,
  },
});
