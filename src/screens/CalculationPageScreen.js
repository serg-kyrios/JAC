import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles"; // експортуємо стилі

import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearData } from "../components/ClearData"; // Перевір, як експортуєш функцію

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

  return (
    <ImageBackground
      source={require("../../assets/images/red_JAC_S2compactSUV.jpg")}
      // Безпечний доступ
      style={styles.background}
    >
      <View style={{ padding: 20 }}>
        <Text>Додати поїздку:</Text>
        <TextInput
          placeholder="Кілометри"
          value={km}
          onChangeText={setKm}
          keyboardType="decimal-pad" // Краще для iOS
          style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
        />
        <TextInput
          placeholder="Літри бензину"
          value={fuel}
          onChangeText={setFuel}
          keyboardType="decimal-pad" // Краще для iOS
          style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
        />
        <Button title="Зберегти" onPress={saveData} />
        <Button
          title="Очистити історію"
          onPress={async () => {
            await clearData();
            setHistory([]);
          }}
          color="red"
        />
        <Text style={{ marginTop: 20 }}>Історія поїздок:</Text>
        {history.map((item, index) => (
          <Text key={index}>
            {`${item.date} - ${item.km} км, ${item.fuel} л`}
          </Text>
        ))}
      </View>
    </ImageBackground>
  );
};

export default CalculationPageScreen;
