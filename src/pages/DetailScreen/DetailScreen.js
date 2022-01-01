import React, { useContext, useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  ToastAndroid,
} from "react-native";
import { useRoute, useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

import styles from "./DetailScreen.style";
import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";
import ComicsLayout from "../../components/layouts/ComicsLayout/ComicsLayout";
import CharactersLayout from "../../components/layouts/CharactersLayout/CharactersLayout";
import IconButton from "../../components/Buttons/IconButton";
import { ADD_TO_BOOKMARK } from "../../context/ThemeContext/types";

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

export default function DetailScreen() {
  const { colors } = useTheme();
  const route = useRoute();
  const { state, dispatch } = useContext(ThemeContext);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
  });
  const { t } = useTranslation();

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
      // save it to async storage
      await AsyncStorage.setItem(
        "bookmarks",
        JSON.stringify({
          ...state.bookmarks,
          [type]: [...state.bookmarks[type], item],
        })
      );

      setToast({
        visible: true,
        message: t("Bookmark Add"),
      });
      return;
    }
    setToast({
      visible: true,
      message: t("Bookmark Already"),
    });
    return;
  };

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["65%", "80%"], []);

  const defaultDesc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisl euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nisl euismod nisi. Sed euismod";

  return (
    <SafeAreaView style={styles.container}>
      <Toast visible={toast.visible} message={toast.message} />
      <ImageBackground
        style={styles.image}
        source={{
          uri: `${item.thumbnail.path}/detail.${item.thumbnail.extension}`,
        }}>
        <IconButton
          containerStyle={styles.favoriteContainer}
          iconStyle={styles.favoriteIcon}
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
