import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import theme from "../../../styles/theme/theme";
import SliderCard from "../../Cards/SliderCard";
import routes from "../../../navigation/routes";
import Config from "react-native-config";

export default function SliderLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const publicKey = Config.PUBLIC_KEY;
  const hash = Config.HASH;
  const ts = Config.T;

  const sliderData = [
    {
      id: 1017328,
      title: "Thor",
      image: require("../../../images/thor.jpg"),
    },
    {
      id: 1017310,
      title: "Iron Man",
      image: require("../../../images/iron_man.jpg"),
    },
    {
      id: 1014873,
      title: "Spider-Man",
      image: require("../../../images/slider_bg_1.jpg"),
    },
  ];

  const navigateToDetail = async (id, type) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    setIsLoading(false);
    navigation.navigate(routes.DETAIL_SCREEN, {
      item: res.data.data.results[0],
      type: type,
    });
  };

  const renderItem = ({ item }) => (
    <SliderCard
      title={item.title}
      buttonTitle={
        isLoading ? (
          <ActivityIndicator size="large" color={theme.MAIN_WHITE} />
        ) : (
          t("Learn More")
        )
      }
      image={item.image}
      onPress={() => navigateToDetail(item.id, "characters")}
    />
  );
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay={false}
        autoplayDelay={2}
        autoplayLoop={false}
        showPagination
        paginationDefaultColor={theme.MAIN_GRAY}
        data={sliderData}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
