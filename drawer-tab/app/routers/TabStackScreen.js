import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import CpuListScreen from "../screens/CpuListScreen";
import BoardListScreen from "../screens/BoardListScreen";
import MemoryListScreen from "../screens/MemoryListScreen";
import CpuDetailsScreen from "../screens/CpuDetailsScreen";
import MenuButton from "./MenuButton";
import StoreTabStackScreen from "./StoreTabStackScreen";

const Tab = createBottomTabNavigator();

const CpuStack = createStackNavigator();
const CpuStackScreen = ({ navigation }) => {
  return (
    <CpuStack.Navigator>
      <CpuStack.Screen
        name="cpulist"
        component={CpuListScreen}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
      <CpuStack.Screen
        name="cpudetails"
        component={CpuDetailsScreen}
        options={{}}
      />
    </CpuStack.Navigator>
  );
};

const BoardStack = createStackNavigator();
const BoardStackScreen = ({ navigation }) => {
  return (
    <BoardStack.Navigator>
      <BoardStack.Screen
        name="boardlist"
        component={BoardListScreen}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
    </BoardStack.Navigator>
  );
};

const MemoryStack = createStackNavigator();
const MemoryStackScreen = ({ navigation }) => {
  return (
    <MemoryStack.Navigator>
      <MemoryStack.Screen
        name="memorylist"
        component={MemoryListScreen}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
    </MemoryStack.Navigator>
  );
};

const StoreStack = createStackNavigator();
const StoreStackScreen = ({ navigation }) => {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen
        name="storetab"
        component={StoreTabStackScreen}
        options={{
          title: "온라인 쇼핑몰",
          headerLeft: () => <MenuButton />,
        }}
      />
    </StoreStack.Navigator>
  );
};

const TabStackScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="cpustack" component={CpuStackScreen} />
      <Tab.Screen name="boardstack" component={BoardStackScreen} />
      <Tab.Screen name="memorystack" component={MemoryStackScreen} />
      <Tab.Screen name="storestack" component={StoreStackScreen} />
    </Tab.Navigator>
  );
};

export default TabStackScreen;
