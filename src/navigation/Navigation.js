import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import SearchScreen from '../pages/SearchScreen';
import SettingsScreen from '../pages/SettingsScreen';
import BookmarkScreen from '../pages/BookmarkScreen';
import routes from './routes';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {
        /* Rest of your app code */
        <Tab.Navigator>
          <Tab.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
          <Tab.Screen
            name={routes.SETTINGS_SCREEN}
            component={SettingsScreen}
          />
          <Tab.Screen name={routes.SEARCH_SCREEN} component={SearchScreen} />
          <Tab.Screen
            name={routes.BOOKMARK_SCREEN}
            component={BookmarkScreen}
          />
        </Tab.Navigator>
      }
    </NavigationContainer>
  );
}
