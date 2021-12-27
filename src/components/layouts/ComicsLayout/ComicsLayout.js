import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import Header from "../../../components/Header";
import useMarvelData from "../../../hooks/ApiHelperHook";
import theme from "../../../styles/theme/theme";
import ComicCard from "../../Cards/ComicCard";

export default function ComicsLayout() {
  const { data: comics, error, isLoading } = useMarvelData("comics");
  function renderItem({ item }) {
    return (
      item.thumbnail &&
      item.textObjects[0] && (
        <ComicCard
          key={item.id}
          comicName={item.title}
          comicDetail={item.textObjects[0].text}
          imageUrl={
            item.thumbnail.path +
            "/standard_fantastic" +
            "." +
            item.thumbnail.extension
          }
        />
      )
    );
  }
  return (
    <View style={styles.container}>
      <Header title="Comics" icon="chevron-right" />
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.MAIN_RED} />
      ) : (
        <FlatList
          data={comics.data.results.slice(0, 7)}
          renderItem={renderItem}
          horizontal
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
