import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { View, underlayColor, TouchableOpacity, Image } from "react-native";

import BookScreen from "../Screen/BookScreen";
import Detail from "../Screen/Detail";

import albumData from "../popular.json";
//import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { TouchableHighlight } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MyTabs />
      {/* <MyDrawer /> */}
    </NavigationContainer>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="StackNavigator">
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name="Wishlist"
        component={StackNavigator}
        options={{
          headerShown: false,
          title: "Settings",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={30} />
          ),
        }}
      />
      <Drawer.Screen
        name="My books"
        component={StackNavigator}
        options={{
          headerShown: false,
          title: "My books",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={30} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackNavigator"
      screenOptions={{
        tabBarActiveTintColor: "#6200EE",
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
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={StackNavigator}
        options={{
          headerShown: false,
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={30} />
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
            <MaterialCommunityIcons name="book-open" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = ({ navigation: { goBack } }) => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BookScreen}
        options={{
          // headerShown: false,
          headerShadowVisible: false,
          title: albumData.albumTitle,
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
            color: "white",
          },

          headerRight: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="magnify"
                color={"gray"}
                onPress={() => alert("Search!!!")}
                size={30}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableHighlight underlayColor="yellow">
              <MaterialCommunityIcons name="menu" color={"gray"} size={30} />
            </TouchableHighlight>
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          // headerShown: false,
          // backgroundColor: "black",
          headerShadowVisible: false,
          title: route.params.title,
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",

          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
            color: "white",
          },

          headerRight: () => (
            <TouchableOpacity onPress={() => setBookmark(!bookmark)}>
              {
                bookmark ? (
                  <MaterialCommunityIcons
                    name="bookmark"
                    color={"#6200EE"}
                    size={30}
                  />
                ) : (
                  // <Image source={require("../../img/icon_nav_bookmark.png")} />
                  <MaterialCommunityIcons
                    name="bookmark-outline"
                    color={"gray"}
                    size={30}
                  />
                )
                // <Image source={require("../../img/icon_bookmark.png")} />
              }
            </TouchableOpacity>
          ),

          headerLeft: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="chevron-left"
                color={"gray"}
                size={30}
                onPress={() => goBack()}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
