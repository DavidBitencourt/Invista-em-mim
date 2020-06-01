import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import DashUser from "./pages/DashUser";
import DefineClass from "./pages/DefineClass";
import Game from "./pages/Game";
import Home from "./pages/Home";
import SupportMaterial from "./pages/SupportMaterial";
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
        <AppStack.Screen name="DashUser" component={DashUser} />
        <AppStack.Screen name="SupportMaterial" component={SupportMaterial} />
        <AppStack.Screen name="DefineClass" component={DefineClass} />
        <AppStack.Screen name="Game" component={Game} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
