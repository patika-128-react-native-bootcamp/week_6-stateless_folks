import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Header from '../../Header/Header';
import useMarvelData from '../../../hooks/ApiHelperHook';
import CharacterCard from '../../Cards/CharacterCard';
import theme from '../../../styles/theme/theme';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../navigation/routes';
import StatusIndicator from '../../StatusIndicator';
import {useTranslation} from 'react-i18next';

export default function CharactersLayout({endpoint}) {
  const {data: characters, error, isLoading} = useMarvelData(endpoint);
  const navigation = useNavigation();
  function handleNavigation(item) {
    navigation.navigate(routes.DETAIL_SCREEN, {item, type: 'characters'});
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
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.container}>
      <Header title={t('Characters')} icon="chevron-right" />
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.MAIN_RED} />
      ) : (
        <FlatList
          data={characters.data.results.slice(0, 7)}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <StatusIndicator
              iconSize={75}
              icon="delete-empty"
              message="No results shown"
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
    width: '100%',
  },
});
