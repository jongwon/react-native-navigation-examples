import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabStackScreen from "./app/routers/TabStackScreen";
import DrawerStackScreen from "./app/routers/DrawerStackScreen";
import StoreTabStackScreen from "./app/routers/StoreTabStackScreen";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerStackScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}
