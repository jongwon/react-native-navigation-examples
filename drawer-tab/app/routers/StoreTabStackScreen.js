import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StoreAScreen from "../screens/store/StoreAScreen";
import StoreBScreen from "../screens/store/StoreBScreen";

const StoreTab = createMaterialTopTabNavigator();

const StoreTabStackScreen = () => {
  return (
    <StoreTab.Navigator>
      <StoreTab.Screen
        name="storea"
        component={StoreAScreen}
        options={{ title: "에누리" }}
      />
      <StoreTab.Screen
        name="storeb"
        component={StoreBScreen}
        options={{ title: "다나와" }}
      />
    </StoreTab.Navigator>
  );
};

export default StoreTabStackScreen;
