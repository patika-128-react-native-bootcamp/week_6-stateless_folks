import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookmarkScreen from '../../../pages/BookmarkScreen';
import DetailScreen from '../../../pages/DetailScreen';
export default function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BookmarkScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
