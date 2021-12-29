import React, { useContext, useMemo, useRef } from "react";
import { View, Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRoute, useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./DetailScreen.style";
import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";
import ComicsLayout from "../../components/layouts/ComicsLayout/ComicsLayout";
import CharactersLayout from "../../components/layouts/CharactersLayout/CharactersLayout";
import theme from "../../styles/theme/theme";
import IconButton from "../../components/Buttons/IconButton";
import { ADD_TO_BOOKMARK } from "../../context/ThemeContext/types";

export default function DetailScreen() {
  const { colors } = useTheme();
  const route = useRoute();
  const { state, dispatch } = useContext(ThemeContext);

  const { item, type } = route.params;

  const addToBookmark = async () => {
    const isDuplicate = state.bookmarks[type].find(
      (bookmark) => bookmark.id === item.id
    );
    if (!isDuplicate) {
      dispatch({
        type: ADD_TO_BOOKMARK,
        payload: {
          type,
          item,
        },
      });
      // await AsyncStorage.setItem(type, item);
      alert("Added to Bookmark");
    }
    return;
  };

  const bottomSheetRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ["65%", "80%"], []);

  const defaultDesc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisl euismod nisi. Sed euismod";

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: `${item.thumbnail.path}/detail.${item.thumbnail.extension}`,
        }}>
        <IconButton
          containerStyle={styles.favorite}
          icon="bookmark"
          onPress={() => addToBookmark()}
          size={30}
        />
      </ImageBackground>
      <BottomSheet
        backgroundStyle={{
          backgroundColor: colors.background,
          ...styles.bottomSheetBackground,
        }}
        handleIndicatorStyle={styles.indicator}
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}>
        <ScrollView>
          <BottomSheetView
            style={[
              styles.contentContainer,
              {
                backgroundColor: colors.background,
              },
            ]}>
            <Text
              style={[
                styles.title,
                {
                  color: colors.text,
                },
              ]}>
              {item.name || item.title}
            </Text>
            <Text
              style={[
                styles.description,
                {
                  color: colors.text,
                },
              ]}>
              {item.description || defaultDesc}
            </Text>
            {type === "characters" ? (
              <ComicsLayout endpoint={`${type}/${item.id}/comics`} />
            ) : (
              <CharactersLayout endpoint={`${type}/${item.id}/characters`} />
            )}
          </BottomSheetView>
        </ScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
}
