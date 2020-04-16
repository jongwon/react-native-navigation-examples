import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text> HomeScreen </Text>
      <Button onPress={() => navigation.push("details")} title="상세화면" />
    </View>
  );
};

export default HomeScreen;
