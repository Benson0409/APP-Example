import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BookScreen from "../Screen/BookScreen";
import Detail from "../Screen/Detail";

import albumData from "../popular.json";

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
        component={BookScreen}
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
        component={Detail}
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
