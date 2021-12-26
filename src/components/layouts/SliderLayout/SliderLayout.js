import React from "react";
import { View } from "react-native";

import SliderCard from "../../Cards/SliderCard";
import styles from "./SliderLayout.style";

export default function SliderLayout() {
  return (
    <View style={styles.container}>
      <SliderCard
        title="Spider-Man"
        buttonTitle="LearnMore"
        image={require("../../../images/slider_bg_1.jpg")}
      />
    </View>
  );
}
