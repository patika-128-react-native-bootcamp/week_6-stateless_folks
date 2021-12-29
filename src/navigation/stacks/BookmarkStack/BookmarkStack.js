import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarkScreen from "../../../pages/BookmarkScreen";
import DetailScreen from "../../../pages/DetailScreen";
import routes from "../../routes";
export default function BookmarkStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: "#fff",
        headerShadowVisible: false,
        headerTitle: "",
      }}>
      <Stack.Screen name={routes.BOOKMARK_SCREEN} component={BookmarkScreen} />
      <Stack.Screen name={routes.DETAIL_SCREEN} component={DetailScreen} />
    </Stack.Navigator>
  );
}
