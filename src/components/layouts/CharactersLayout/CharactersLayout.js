import React from "react";
import { ActivityIndicator, FlatList, View, StyleSheet } from "react-native";

import Header from "../../Header/Header";
import useMarvelData from "../../../hooks/ApiHelperHook";
import CharacterCard from "../../Cards/CharacterCard";
import theme from "../../../styles/theme/theme";

export default function CharactersLayout() {
  const { data: characters, error, isLoading } = useMarvelData("characters");
  function renderItem({ item }) {
    return (
      item.thumbnail && (
        <CharacterCard
          title={item.name || "Marvel Hero"}
          image={{
            uri:
              item.thumbnail.path +
              "/standard_fantastic" +
              "." +
              item.thumbnail.extension,
          }}
        />
      )
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Characters" icon="chevron-right" />
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.MAIN_RED} />
      ) : (
        <FlatList
          data={characters.data.results.slice(0, 7)}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
