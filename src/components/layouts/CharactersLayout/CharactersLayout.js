import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Header from '../../Header/Header';
import useMarvelData from '../../../hooks/ApiHelperHook';
import CharacterCard from '../../Cards/CharacterCard';
import theme from '../../../styles/theme/theme';
import {useNavigation} from '@react-navigation/native';

export default function CharactersLayout() {
  const {data: characters, error, isLoading} = useMarvelData('characters');
  const navigation = useNavigation();
  function handleNavigation(item) {
    navigation.navigate('DetailScreen', {item});
  }
  function renderItem({item}) {
    return (
      item.thumbnail && (
        <TouchableOpacity
          onPress={() => {
            handleNavigation(item);
          }}>
          <CharacterCard
            title={item.name || 'Marvel Hero'}
            image={{
              uri:
                item.thumbnail.path +
                '/standard_fantastic' +
                '.' +
                item.thumbnail.extension,
            }}
          />
        </TouchableOpacity>
      )
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Characters" icon="chevron-right" />
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.MAIN_RED} />
      ) : (
        <FlatList
          data={characters.data.results.slice(0, 7)}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
