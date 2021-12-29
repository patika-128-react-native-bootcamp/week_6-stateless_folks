import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
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
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={icon}
          style={[styles.icon, iconStyle]}
          size={size}
          color={color}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  icon: {
    padding: 5,

    borderRadius: 25,
    backgroundColor: theme.MAIN_RED,
  },
});
