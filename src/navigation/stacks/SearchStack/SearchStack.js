import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../../../pages/SearchScreen';
import DetailScreen from '../../../pages/DetailScreen';
import routes from '../../routes';
export default function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.SEARCH_SCREEN} component={SearchScreen} />
      <Stack.Screen name={routes.DETAIL_SCREEN} component={DetailScreen} />
    </Stack.Navigator>
  );
}
