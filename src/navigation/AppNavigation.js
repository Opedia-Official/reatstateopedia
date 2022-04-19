import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screen/HomeScreen";
import Details from "../screen/Details";
import SavedHome from "../screen/SavedHome";
import Search from "../screen/Search";
import Profile from "../screen/Profile";

import { BlurView } from "expo-blur";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="bell" color={color} size={size} />
            <AntDesign name="home" color={color} size={size} />
          ),

          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name="bell" color={color} size={size} />
            <Ionicons name="search-outline" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Save"
        component={SavedHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={MyTabs} />
        <Stack.Screen name="details1" component={Details} />
        <Stack.Screen name="saved" component={SavedHome} />
        <Stack.Screen name="search" component={Search} />
        {/* <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SubScreen" component={SubScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
