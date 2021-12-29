import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import theme from '../../../styles/theme/theme';
import {useTranslation} from 'react-i18next';
import SliderCard from '../../Cards/SliderCard';

export default function SliderLayout() {
  const {t, i18n} = useTranslation();
  const sliderData = [
    {
      title: 'Thor',
      image: require('../../../images/slider_bg_1.jpg'),
    },
    {
      title: 'Iron Man',
      image: require('../../../images/slider_bg_1.jpg'),
    },
    {
      title: 'Spider-Man',
      image: require('../../../images/slider_bg_1.jpg'),
    },
  ];
  const renderItem = ({item}) => (
    <SliderCard
      title={item.title}
      buttonTitle={t('Learn More')}
      image={require('../../../images/slider_bg_1.jpg')}
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
