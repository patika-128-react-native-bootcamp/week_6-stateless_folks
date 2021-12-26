import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import ComicCard from '../../ComicCard';
import useMarvelData from '../../../hooks/ApiHelperHook';

export default function ComicsLayout() {
  const {data, error, isLoading} = useMarvelData('comics');
  const comics = data;
  //console.log(comics.data.results.length);
  function renderItem({item}) {
    return (
      item.thumbnail &&
      item.textObjects[0] && (
        <ComicCard
          key={item.id}
          comicName={item.title}
          comicDetail={item.textObjects[0].text}
          imageUrl={
            item.thumbnail.path +
            '/standard_fantastic' +
            '.' +
            item.thumbnail.extension
          }
        />
      )
    );
  }
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={comics.data.results.slice(0, 7)}
          renderItem={renderItem}
          horizontal
        />
      )}
    </View>
  );
}
