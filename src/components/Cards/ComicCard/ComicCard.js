import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { LinearGradient } from "react-native-gradients";
import styles from "./ComicCard.styles";

export default function ComicCard({ comicName, comicDetail, imageUrl }) {
  const image = { uri: imageUrl };

  const colorList = [
    { offset: "30%", color: "#000", opacity: "0.7" },
    { offset: "100%", color: "#000", opacity: "0" },
  ];

  const BackgroundGradient = ({ style }) => (
    <View style={[styles.gradientBg, style]}>
      <LinearGradient colorList={colorList} angle={90} />
    </View>
  );

  return (
    <ImageBackground source={image} style={styles.container}>
      <BackgroundGradient />
      <View style={styles.textContainer}>
        <Text style={styles.comicName} numberOfLines={2} ellipsizeMode="tail">
          {comicName}
        </Text>
        <Text style={styles.comicDetail} numberOfLines={2} ellipsizeMode="tail">
          {comicDetail}
        </Text>
      </View>
    </ImageBackground>
  );
}
