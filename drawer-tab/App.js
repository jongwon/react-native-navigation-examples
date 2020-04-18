import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabStackScreen from "./app/routers/TabStackScreen";
import DrawerStackScreen from "./app/routers/DrawerStackScreen";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerStackScreen />
    </NavigationContainer>
  );
}
