//import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
//import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CalculationPageScreen = () => {
  const [km, setKm] = useState("");
  const [fuel, setFuel] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  // Зберігаємо дані
  const saveData = async () => {
    try {
      const newEntry = { km, fuel, date: new Date().toLocaleString() };
      const storedData = await AsyncStorage.getItem("fuelRecords");
      const records = storedData ? JSON.parse(storedData) : [];
      records.push(newEntry);
      await AsyncStorage.setItem("fuelRecords", JSON.stringify(records));
      setHistory(records);
      setKm("");
      setFuel("");
    } catch (error) {
      console.error("Помилка збереження даних", error);
    }
  };

  // Завантажуємо дані
  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("fuelRecords");
      if (storedData) {
        setHistory(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Помилка завантаження даних", error);
    }
  };

  // Очищення всіх записів (наприклад, для тестів)
  const clearData = async () => {
    await AsyncStorage.removeItem("fuelRecords");
    setHistory([]);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Додати поїздку:</Text>
      <TextInput
        placeholder="Кілометри"
        value={km}
        onChangeText={setKm}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Літри бензину"
        value={fuel}
        onChangeText={setFuel}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button title="Зберегти" onPress={saveData} />
      <Button title="Очистити історію" onPress={clearData} color="red" />

      <Text style={{ marginTop: 20 }}>Історія поїздок:</Text>
      {history.map((item, index) => (
        <Text
          key={index}
        >{`${item.date} - ${item.km} км, ${item.fuel} л`}</Text>
      ))}
    </View>
  );
};

export default CalculationPageScreen;
