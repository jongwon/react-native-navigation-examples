import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import TabStackScreen from "./TabStackScreen";
import ImageListScreen from "../screens/ImageListScreen";
import AboutScreen from "../screens/AboutScreen";
import Icon from "react-native-vector-icons/Ionicons";
import MenuButton from "./MenuButton";

const Drawer = createDrawerNavigator();

const ImageStack = createStackNavigator();
const ImageStackScreen = ({ navigation }) => {
  return (
    <ImageStack.Navigator>
      <ImageStack.Screen
        name="imagelist"
        component={ImageListScreen}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
    </ImageStack.Navigator>
  );
};

const AboutStack = createStackNavigator();
const AboutStackScreen = ({ navigation }) => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="about"
        component={AboutScreen}
        options={{
          headerLeft: () => <MenuButton />,
        }}
      />
    </AboutStack.Navigator>
  );
};

const CustomDrawer = ({ navigation }) => {
  const goToStack = (stackName) => {
    navigation.navigate(stackName);
  };
  return (
    <DrawerContentScrollView>
      <DrawerItem
        icon={() => <Icon name="ios-home" size={24} />}
        label="CPU"
        onPress={() => goToStack("cpustack")}
        style={{
          borderBottomWidth: 1,
          borderRadius: 0,
          borderColor: "#ccc",
        }}
      />
      <DrawerItem label="보드" onPress={() => goToStack("boardstack")} />
      <DrawerItem label="메모리" onPress={() => goToStack("memorystack")} />
      <DrawerItem label="에누리" onPress={() => goToStack("storea")} />
      <DrawerItem label="다나와" onPress={() => goToStack("storeb")} />
      <DrawerItem label="사진 리스트" onPress={() => goToStack("imagestack")} />
      <DrawerItem
        label="이 앱에 대하여"
        onPress={() => goToStack("aboutstack")}
      />
    </DrawerContentScrollView>
  );
};

const DrawerStackScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => (
        <CustomDrawer navigation={navigation} />
      )}
    >
      <Drawer.Screen name="tabstack" component={TabStackScreen} />
      <Drawer.Screen name="imagestack" component={ImageStackScreen} />
      <Drawer.Screen name="aboutstack" component={AboutStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerStackScreen;
