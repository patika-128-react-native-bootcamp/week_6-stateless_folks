import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import CharactersLayout from "../../components/layouts/CharactersLayout";
import ComicsLayout from "../../components/layouts/ComicsLayout";
import SliderLayout from "../../components/layouts/SliderLayout";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SliderLayout />
      <CharactersLayout />
      <ComicsLayout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
