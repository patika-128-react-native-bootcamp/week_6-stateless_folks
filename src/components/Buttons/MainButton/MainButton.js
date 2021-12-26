import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

import styles from "./MainButton.style";

export default function MainButton({ onPress = null, title }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}
