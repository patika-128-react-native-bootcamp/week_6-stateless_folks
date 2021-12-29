import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import CharactersLayout from "../../components/layouts/CharactersLayout";
import ComicsLayout from "../../components/layouts/ComicsLayout";
import SliderLayout from "../../components/layouts/SliderLayout";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SliderLayout />
        <View style={styles.innerContainer}>
          <CharactersLayout endpoint="characters" />
          <ComicsLayout endpoint="comics" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 20,
  },
});
