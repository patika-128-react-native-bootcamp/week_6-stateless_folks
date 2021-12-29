import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";
import SearchCard from "../../components/Cards/SearchCard";
import StatusIndicator from "../../components/StatusIndicator";
import theme from "../../styles/theme/theme";
import styles from "./BookmarkScreen.styles";
import routes from "../../navigation/routes";
import { useTranslation } from "react-i18next";

export default function BookmarkScreen() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { state } = useContext(ThemeContext);

  const navigateToDetail = (item, type) => {
    navigation.navigate(routes.DETAIL_SCREEN, { item, type });
  };

  const renderBookmarkItem = (item, type) => (
    <TouchableOpacity onPress={() => navigateToDetail(item, type)}>
      <SearchCard containerStyle={styles.card} searchData={item} />
    </TouchableOpacity>
  );
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.bookmarkContainer}>
        <Text
          style={[
            styles.header,
            {
              color: colors.text,
            },
          ]}>
          {t("Characters")}
        </Text>
        <FlatList
          data={state.bookmarks.characters}
          renderItem={({ item }) => renderBookmarkItem(item, "characters")}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            <StatusIndicator
              color={theme.MAIN_GRAY}
              icon="delete-empty"
              message={t("No Characters")}
              style={styles.statusIndicator}
            />
          }
        />
      </View>
      <View style={styles.bookmarkContainer}>
        <Text
          style={[
            styles.header,
            {
              color: colors.text,
            },
          ]}>
          {t("Comics")}
        </Text>
        <FlatList
          data={state.bookmarks.comics}
          renderItem={({ item }) => renderBookmarkItem(item, "comics")}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            <StatusIndicator
              color={theme.MAIN_GRAY}
              icon="delete-empty"
              message={t("No Comics")}
              style={styles.statusIndicator}
            />
          }
        />
      </View>
    </View>
  );
}
