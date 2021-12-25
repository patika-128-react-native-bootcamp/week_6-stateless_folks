import React, {useContext, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import SearchScreen from '../pages/SearchScreen';
import SettingsScreen from '../pages/SettingsScreen';
import BookmarkScreen from '../pages/BookmarkScreen';
import routes from './routes';
import {ThemeContext} from '../context/ThemeContext/ThemeProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Navigation() {
  const Tab = createBottomTabNavigator();
  const scheme = useColorScheme();
  const {state, dispatch} = useContext(ThemeContext);
  // const MyTheme = {
  //   ...DefaultTheme,
  //   colors: {...DefaultTheme.colors, text: 'yellow'},
  // };
  useEffect(() => {
    getData().then(data => {
      if (data) {
        dispatch({type: data});
      }
    });
    // console.log(persistentVal);
    // if (persistentVal) {
    //   dispatch({type: getData()});
    // }
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('theme');
      return value !== null ? value : null;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <NavigationContainer
      theme={state.theme === 'dark' ? DarkTheme : DefaultTheme}>
      {
        /* Rest of your app code */
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;

              if (route.name === routes.HOME_SCREEN) {
                iconName = 'home';
              } else if (route.name === routes.SETTINGS_SCREEN) {
                iconName = 'theme-light-dark';
              } else if (route.name === routes.SEARCH_SCREEN) {
                iconName = 'account-search';
              } else if (route.name === routes.BOOKMARK_SCREEN) {
                iconName = 'bookmark';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name={routes.HOME_SCREEN} component={HomeScreen} />

          <Tab.Screen name={routes.SEARCH_SCREEN} component={SearchScreen} />
          <Tab.Screen
            name={routes.BOOKMARK_SCREEN}
            component={BookmarkScreen}
          />
          <Tab.Screen
            name={routes.SETTINGS_SCREEN}
            component={SettingsScreen}
          />
        </Tab.Navigator>
      }
    </NavigationContainer>
  );
}
