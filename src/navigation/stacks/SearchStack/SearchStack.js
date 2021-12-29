import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../../../pages/SearchScreen";
import DetailScreen from "../../../pages/DetailScreen";
import routes from "../../routes";
import IconButton from "../../../components/Buttons/IconButton";
export default function SearchStack() {
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
      <Stack.Screen name={routes.SEARCH_SCREEN} component={SearchScreen} />
      <Stack.Screen
        name={routes.DETAIL_SCREEN}
        component={DetailScreen}
        options={{
          headerRight: () => (
            <IconButton icon="bookmark" onPress={addToBookmark} size={30} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
