import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ImageListScreen from "../screens/ImageListScreen";
import AboutScreen from "../screens/AboutScreen";
import { Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DetailsScreen from "../screens/DetailsScreen";

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ImageStack = createStackNavigator();
const AboutStack = createStackNavigator();

const MenuButton = ({ navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <TouchableOpacity>
      <Icon
        name="ios-menu"
        style={{
          fontSize: 30,
          marginLeft: 10,
          marginTop: 5,
          paddingLeft: 5,
          paddingRight: 5,
        }}
        onPress={openMenu}
      />
    </TouchableOpacity>
  );
};

const HomeStackRouter = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "메인 화면",
          headerLeft: () => <MenuButton navigation={navigation} />,
        }}
      />
      <HomeStack.Screen name="details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

const ImageRouter = ({ navigation }) => {
  return (
    <ImageStack.Navigator>
      <ImageStack.Screen
        name="imagelist"
        component={ImageListScreen}
        options={{
          title: "이미지",
          headerLeft: () => <MenuButton navigation={navigation} />,
        }}
      />
    </ImageStack.Navigator>
  );
};

const AboutRouter = ({ navigation }) => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="about"
        component={AboutScreen}
        options={{
          title: "이 앱에 대하여...",
          headerLeft: () => <MenuButton navigation={navigation} />,
        }}
      />
    </AboutStack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="homestack"
        component={HomeStackRouter}
        options={{
          title: "홈 화면",
        }}
      />
      <Drawer.Screen
        name="imagestack"
        component={ImageRouter}
        options={{
          title: "이미지",
        }}
      />
      <Drawer.Screen
        name="aboutstack"
        component={AboutRouter}
        options={{
          title: "이 앱에 대하여...",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
