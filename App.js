import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import MyTabs from "./src/navigation/NavigationScreen"; // імпорт твого кастомного Tab Navigator
import CalculationPageScreen from "./src/screens/CalculationPageScreen";
//import NavigationScreen from "./src/navigation/NavigationScreen";
import MyTabs from "./src/navigation/NavigationScreen";
import { View, Text, StyleSheet } from "react-native";
//import sampler from "./__tests__/Sampler";
// Заглушка для HomeScreen (або імпортуй його)

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
