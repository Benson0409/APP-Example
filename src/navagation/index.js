import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import BookScreen from "../Screen/BookScreen";
import Detail from "../Screen/Detail";

import albumData from "../popular.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MyTabs />
    </NavigationContainer>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackNavigator"
      screenOptions={{
        tabBarActiveTintColor: "purple",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={StackNavigator}
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My books"
        component={StackNavigator}
        options={{
          headerShown: false,
          title: "My books",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="read" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BookScreen}
        options={{
          headerShown: false,
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
          // headerShown: false,
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
