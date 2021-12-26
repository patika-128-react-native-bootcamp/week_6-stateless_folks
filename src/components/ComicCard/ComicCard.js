import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './ComicCard.styles';

export default function ComicCard({comicName, comicDetail, imageUrl}) {
  const image = {uri: imageUrl};
  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.comicName} numberOfLines={2} ellipsizeMode="tail">
          {comicName}
        </Text>
        <Text style={styles.comicDetail} numberOfLines={2} ellipsizeMode="tail">
          {comicDetail}
        </Text>
      </View>
    </ImageBackground>
  );
}
