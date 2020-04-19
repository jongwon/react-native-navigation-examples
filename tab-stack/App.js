import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TabStackScreen from "./app/routers/TabStackScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <TabStackScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}
