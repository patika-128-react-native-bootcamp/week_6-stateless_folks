import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

import IconButton from "../Buttons/IconButton";
import styles from "./Header.style";

export default function Header({ title, icon }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
          },
        ]}>
        {title}
      </Text>
      <IconButton icon={icon} size={35} />
    </View>
  );
}
