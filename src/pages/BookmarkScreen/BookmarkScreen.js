import React from 'react';
import {View, Text} from 'react-native';
import BookmarkCard from '../../components/Cards/BookmarkCard';
import styles from './BookmarkScreen.styles';

export default function BookmarkScreen() {
  const data = [
    {name: 'NAME', description: 'description'},
    {name: 'NAME', description: 'description'},
  ];
  return (
    <View style={styles.container}>
      <BookmarkCard data={data} header={'Characters'} />
      <BookmarkCard data={data} header={'Comics'} />
    </View>
  );
}
