import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SearchCard.style";

export default function SearchCard({ searchData }) {
  const { colors } = useTheme();

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

  return (
    <View style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: `${searchData.thumbnail.path}/standard_fantastic.${searchData.thumbnail.extension}`,
        }}
      />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>
          {searchData.name || searchData.title}
        </Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[
            styles.description,
            {
              color: colors.text,
            },
          ]}>
          {searchData.description || lorem}
        </Text>
      </View>
    </View>
  );
}
