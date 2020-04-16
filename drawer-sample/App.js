import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./app/routers/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}
