import React from "react";
import { View, Text } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

import IconButton from "../Buttons/IconButton";
import styles from "./Header.style";
import routes from "../../navigation/routes";

export default function Header({ title, icon }) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const navigateToSearch = () => {
    navigation.navigate(routes.SEARCH_SCREEN);
  };

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
      <IconButton icon={icon} size={35} onPress={navigateToSearch} />
    </View>
  );
}
