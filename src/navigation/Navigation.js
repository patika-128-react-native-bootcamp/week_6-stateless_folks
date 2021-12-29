import React, { useContext, useEffect } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./stacks/HomeStack";
import SettingsScreen from "../pages/SettingsScreen";
import routes from "./routes";
import { ThemeContext } from "../context/ThemeContext/ThemeProvider";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BookmarkStack from "./stacks/BookmarkStack/BookmarkStack";
import SearchStack from "./stacks/SearchStack/SearchStack";
import theme from "../styles/theme/theme";

export default function Navigation() {
  const Tab = createBottomTabNavigator();
  const { state, dispatch } = useContext(ThemeContext);

  useEffect(() => {
    getData().then((data) => {
      if (data) {
        dispatch({ type: data });
      }
    });
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("theme");
      return value !== null ? value : null;
    } catch (e) {
      console.log(e);
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
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen
            name={routes.TABS.HOME_SCREEN_TAB}
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name={"home"} size={size} color={color} />
              ),
              title: "Home",
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
              title: "Search",
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
              title: "Bookmarks",
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
              title: "Settings",
            }}
          />
        </Tab.Navigator>
      }
    </NavigationContainer>
  );
}
