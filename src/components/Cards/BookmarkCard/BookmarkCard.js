import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from './BookmarkCard.styles';
export default function BookmarkCard({data, header}) {
  function renderItem({item}) {
    return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://im.haberturk.com/2021/11/17/ver1637137165/3255983_810x458.jpg',
          }}
        />
        <View style={styles.textContainer}>
          <Text
            style={styles.detailHeader}
            numberOfLines={3}
            ellipsizeMode="tail">
            {item.name}
          </Text>
          <Text
            style={styles.detailText}
            numberOfLines={3}
            ellipsizeMode="tail">
            {item.description}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{header}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
