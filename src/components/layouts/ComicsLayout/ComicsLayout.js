import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import Header from "../../../components/Header";
import useMarvelData from "../../../hooks/ApiHelperHook";
import theme from "../../../styles/theme/theme";
import ComicCard from "../../Cards/ComicCard";
import routes from "../../../navigation/routes";
import StatusIndicator from "../../StatusIndicator";
import { useTranslation } from "react-i18next";

export default function ComicsLayout({ endpoint }) {
  const { data: comics, error, isLoading } = useMarvelData(endpoint);
  const navigation = useNavigation();
  const { t } = useTranslation();

  function renderItem({ item }) {
    return (
      item.thumbnail &&
      item.textObjects[0] && (
        <TouchableOpacity
          onPress={() => {
            handleNavigation(item);
          }}>
          <ComicCard
            comicName={item.title}
            comicDetail={item.textObjects[0].text}
            imageUrl={
              item.thumbnail.path +
              "/standard_fantastic" +
              "." +
              item.thumbnail.extension
            }
          />
        </TouchableOpacity>
      )
    );
  }

  const extractId = (item, i) => `${item.id}__${i}`;
  function handleNavigation(item) {
    navigation.navigate(routes.DETAIL_SCREEN, {
      item,
      type: "comics",
    });
  }
  return (
    <View style={styles.container}>
      <Header title={t("Comics")} icon="chevron-right" />
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.MAIN_RED} />
      ) : error ? (
        <StatusIndicator
          icon="alert-circle"
          message="An error has occured"
          iconSize={75}
        />
      ) : (
        <FlatList
          keyExtractor={extractId}
          data={comics.data.results.slice(0, 7)}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <StatusIndicator
              size={75}
              icon="delete-empty"
              message={t("No Result")}
              color={theme.MAIN_GRAY}
            />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
  },
});
