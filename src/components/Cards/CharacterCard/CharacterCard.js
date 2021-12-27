import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from "react-native-gradients";

import styles from "./CharacterCard.style";

export default function CharacterCard({ title, image }) {
  const colorList = [
    { offset: "35%", color: "#000", opacity: "0.65" },
    { offset: "100%", color: "#000", opacity: "0" },
  ];

  const BackgroundGradient = ({ style }) => (
    <View style={[styles.gradientBg, style]}>
      <LinearGradient colorList={colorList} angle={90} />
    </View>
  );

  return (
    <TouchableOpacity>
      <ImageBackground style={styles.backgroundContainer} source={image}>
        <View style={styles.container}>
          <BackgroundGradient />
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
