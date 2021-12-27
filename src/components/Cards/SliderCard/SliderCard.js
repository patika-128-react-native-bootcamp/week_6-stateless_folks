import React from "react";
import { View, Text, ImageBackground } from "react-native";

import MainButton from "../../Buttons/MainButton";
import styles from "./SliderCard.style";

export default function SliderCard({
  title,
  image,
  onPress = null,
  buttonTitle,
}) {
  return (
    <ImageBackground style={styles.image} source={image}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.line} />
        <MainButton onPress={onPress} title={buttonTitle} />
      </View>
    </ImageBackground>
  );
}
