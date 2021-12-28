import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Header from '../../../components/Header';
import useMarvelData from '../../../hooks/ApiHelperHook';
import theme from '../../../styles/theme/theme';
import ComicCard from '../../Cards/ComicCard';
import routes from '../../../navigation/routes';

export default function ComicsLayout() {
  const {data: comics, error, isLoading} = useMarvelData('comics');
  function renderItem({item}) {
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
              '/standard_fantastic' +
              '.' +
              item.thumbnail.extension
            }
          />
        </TouchableOpacity>
      )
    );
  }

  const extractId = (item, i) => `${item.id}__${i}`;
  const navigation = useNavigation();
  function handleNavigation(item) {
    navigation.navigate(routes.DETAIL_SCREEN, {item});
  }
  return (
    <View style={styles.container}>
      <Header title="Comics" icon="chevron-right" />
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.MAIN_RED} />
      ) : (
        <FlatList
          keyExtractor={extractId}
          data={comics.data.results.slice(0, 7)}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
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
