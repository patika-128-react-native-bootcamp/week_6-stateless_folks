import React from 'react';
import {View, Text} from 'react-native';

export default function DetailScreen({route}) {
  const {item} = route.params;
  console.log(item);
  return (
    <View>
      <Text></Text>
    </View>
  );
}
