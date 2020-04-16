import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import DetailsScreen from "../screens/DetailsScreen";

const TabStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "홈 화면",
        }}
      />
      <HomeStack.Screen name="details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};
const AboutStackScreen = () => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="about"
        component={AboutScreen}
        options={{ title: "이 앱에 대하여..." }}
      />
    </AboutStack.Navigator>
  );
};

const TabStackScreen = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="Home" component={HomeStackScreen} />
      <TabStack.Screen name="About" component={AboutStackScreen} />
    </TabStack.Navigator>
  );
};

export default TabStackScreen;
