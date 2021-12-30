import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../../../pages/HomeScreen";
import DetailScreen from "../../../pages/DetailScreen";
import routes from "../../routes";
import IconButton from "../../../components/Buttons/IconButton";
export default function HomeStack() {
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
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={routes.DETAIL_SCREEN} component={DetailScreen} />
    </Stack.Navigator>
  );
}
