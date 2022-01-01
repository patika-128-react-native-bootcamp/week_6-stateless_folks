import React, { useContext, useEffect } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";

import HomeStack from "./stacks/HomeStack";
import SettingsScreen from "../pages/SettingsScreen";
import routes from "./routes";
import { ThemeContext } from "../context/ThemeContext/ThemeProvider";
import BookmarkStack from "./stacks/BookmarkStack/BookmarkStack";
import SearchStack from "./stacks/SearchStack/SearchStack";
import theme from "../styles/theme/theme";
import { SET_BOOKMARKS } from "../context/ThemeContext/types";

export default function Navigation() {
  const Tab = createBottomTabNavigator();
  const { state, dispatch } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getData("theme").then((data) => {
      if (data) {
        dispatch({ type: data });
      }
    });
    getData("lang").then((data) => {
      if (data) {
        i18n.changeLanguage(data);
      }
    });
    getData("bookmarks").then((data) => {
      if (data) {
        dispatch({
          type: SET_BOOKMARKS,
          payload: JSON.parse(data),
        });
      }
    });
  }, []);
  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null ? value : null;
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <NavigationContainer
      theme={
        state.theme === "dark"
          ? {
              ...DarkTheme,
              colors: {
                ...DarkTheme.colors,
                background: theme.MAIN_BLACK,
              },
            }
          : DefaultTheme
      }>
      {
        /* Rest of your app code */
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: theme.MAIN_RED,
          }}>
          <Tab.Screen
            name={routes.TABS.HOME_SCREEN_TAB}
            component={HomeStack}
            options={{
              headerShown: false,

              tabBarIcon: ({ color, size }) => (
                <Icon name={"home"} size={size} color={color} />
              ),
              title: t("Home"),
            }}
          />

          <Tab.Screen
            name={routes.TABS.SEARCH_SCREEN_TAB}
            component={SearchStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name={"magnify"} size={size} color={color} />
              ),
              title: t("Search"),
            }}
          />
          <Tab.Screen
            name={routes.TABS.BOOKMARK_SCREEN_TAB}
            component={BookmarkStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name={"bookmark"} size={size} color={color} />
              ),
              title: t("Bookmarks"),
            }}
          />
          <Tab.Screen
            name={routes.SETTINGS_SCREEN}
            component={SettingsScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name={"cog"} size={size} color={color} />
              ),
              title: t("Settings"),
            }}
          />
        </Tab.Navigator>
      }
    </NavigationContainer>
  );
}
