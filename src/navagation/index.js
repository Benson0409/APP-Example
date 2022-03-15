import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import bookScreen from "../Screen/bookScreen";
import detail from "../Screen/detail";

import albumData from "../json/albums.json";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={bookScreen}
        options={{
          title: albumData.albumTitle,
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={detail}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
