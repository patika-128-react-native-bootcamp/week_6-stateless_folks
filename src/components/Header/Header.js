import React from "react";
import { View, Text } from "react-native";

import IconButton from "../Buttons/IconButton";
import styles from "./Header.style";

export default function Header({ title, icon }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <IconButton icon={icon} size={35} />
    </View>
  );
}
