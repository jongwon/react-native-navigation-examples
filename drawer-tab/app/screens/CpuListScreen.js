import React from "react";
import { View, Text, Button } from "react-native";

const CpuListScreen = ({ navigation }) => {
  return (
    <View>
      <Text> CpuListScreen </Text>
      <Button
        title="Cpu 상세 화면"
        onPress={() => navigation.push("cpudetails")}
      />
    </View>
  );
};

export default CpuListScreen;
