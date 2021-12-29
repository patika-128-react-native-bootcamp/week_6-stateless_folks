import React from "react";
import { View, Text } from "react-native";

import styles from "./SettingsCard.style";

export default function SettingsCard({ title, titleStyle, children }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={styles.optionContainer}>{children}</View>
    </View>
  );
}
