import React from "react";
import { SafeAreaView } from "react-native";

import CharactersLayout from "../../components/layouts/CharactersLayout";
import ComicsLayout from "../../components/layouts/ComicsLayout";
import SliderLayout from "../../components/layouts/SliderLayout";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <SliderLayout />
      <CharactersLayout />
      <ComicsLayout />
    </SafeAreaView>
  );
}
