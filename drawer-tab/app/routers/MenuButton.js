import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

const MenuButton = () => {
  const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <TouchableOpacity>
      <Icon
        name="ios-menu"
        onPress={openMenu}
        style={{
          fontSize: 30,
          marginLeft: 10,
          marginTop: 5,
          paddingLeft: 5,
          paddingRight: 5,
        }}
      />
    </TouchableOpacity>
  );
};

export default MenuButton;
