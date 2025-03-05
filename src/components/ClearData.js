import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const clearData = (setHistory) => {
  Alert.alert("Підтвердження", "Ви впевнені, що хочете видалити всі записи?", [
    { text: "Скасувати", style: "cancel" },
    {
      text: "Видалити",
      style: "destructive",
      onPress: async () => {
        await AsyncStorage.removeItem("fuelRecords");
        setHistory([]); // Очищаємо стан
      },
    },
  ]);
};

export default clearData;
