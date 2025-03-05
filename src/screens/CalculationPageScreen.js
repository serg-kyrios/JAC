import React from "react";
import { View, Text } from "react-native";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const CalculationPageScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.push("CalculationPage")}>
        Go to Details... again
      </Button>
      <Button onPress={() => navigation.popToTop("Home")}>Go back</Button>
      <Text>Calculation Page</Text>
    </View>
  );
};
export default CalculationPageScreen;
