import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import DefineClass from "./pages/DefineClass";
import Home from "./pages/Home";
const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="DefineClass" component={DefineClass} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
