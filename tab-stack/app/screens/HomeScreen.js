import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  const goToDetail = (e) => {
    navigation.navigate("details");
  };

  return (
    <>
      <View>
        <Text> HomeScreen </Text>
      </View>
      <View>
        <Button onPress={goToDetail} title="상세화면으로 들어가기"></Button>
      </View>
    </>
  );
};

export default HomeScreen;
