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

import { ThemeContext } from "../../context/ThemeContext/ThemeProvider";
import ComicsLayout from "../../components/layouts/ComicsLayout/ComicsLayout";
import CharactersLayout from "../../components/layouts/CharactersLayout/CharactersLayout";
import theme from "../../styles/theme/theme";
import IconButton from "../../components/Buttons/IconButton";

export default function DetailScreen() {
  const { colors } = useTheme();
  const route = useRoute();
  const { state, dispatch } = useContext(ThemeContext);

  const { item, type } = route.params;

  const addToBookmark = () => {
    dispatch({
      type: "ADD_TO_BOOKMARK",
      payload: {
        type,
        item,
      },
    });
    alert("Added to Bookmark");
  };

  console.log(state);

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
          containerStyle={{
            padding: 10,
          }}
          icon="bookmark"
          onPress={addToBookmark}
          size={30}
        />
      </ImageBackground>
      <BottomSheet
        backgroundStyle={{
          backgroundColor: colors.background,
          borderRadius: 50,
          overflow: "hidden",
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.MAIN_GRAY,
          width: 120,
          height: 10,
          borderRadius: 50,
        }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    zIndex: 0,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "100%",
    height: Dimensions.get("window").height / 2,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    overflow: "hidden",
    paddingBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
  },
});
