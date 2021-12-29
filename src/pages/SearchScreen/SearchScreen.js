import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import Config from "react-native-config";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import Search from "../../components/Search";
import styles from "./SearchScreen.styles";
import SearchCard from "../../components/Cards/SearchCard";
import StatusIndicator from "../../components/StatusIndicator";
import theme from "../../styles/theme/theme";
import routes from "../../navigation/routes";

export default function SearchScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState({});
  const publicKey = Config.PUBLIC_KEY;
  const hash = Config.HASH;
  const ts = Config.T;

  function handleSearchTerm(text) {
    setSearchTerm(text);
  }
  function handleSearch() {
    const incomingUrl =
      "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" +
      searchTerm +
      `&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    axios
      .get(incomingUrl)
      .then(({ data }) => {
        setSearchData(data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const extractId = (item) => item.id.toString();
  const navigateToDetail = (item) => {
    navigation.navigate(routes.DETAIL_SCREEN, {
      item,
      type: "characters",
    });
  };
  const renderSearchCard = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateToDetail(item)}>
        <SearchCard searchData={item} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Search
        size={30}
        icon="magnify"
        placeholder={t("Find")}
        onSearch={handleSearchTerm}
        onPress={handleSearch}
      />
      <FlatList
        data={searchData.results}
        keyExtractor={extractId}
        renderItem={renderSearchCard}
        ListEmptyComponent={
          <StatusIndicator
            icon="delete-empty"
            color={theme.MAIN_GRAY}
            iconSize={75}
            message={t("No Result")}
          />
        }
      />
    </View>
  );
}
