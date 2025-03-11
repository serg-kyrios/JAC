import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalculationPageScreen from "../screens/CalculationPageScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import Sampler from "../components/Sampler";

// Об'єкт з іконками для вкладок
const icons = {
  Home: "home",
  CalculationPage: "calculator",
  Settings: "cog",
};

// Додаємо Tab Navigator
const Tab = createBottomTabNavigator();

// Заглушка для HomeScreen
function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/A white JAC S3 NEW compact SUV.jpg")}
        style={styles.background}
        resizeMode="cover" // або , , contain"""stretch""repeat"
        //opacity={0.5} // Прозорість фону
        borderRadius={10} // Радіус заокруглення
        borderWidth={2} // Товщина рамки
        borderColor="red" // Колір рамки
        borderStyle="dashed" // Стиль рамки
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Привіт, світ!</Text>
        </View>
        <Text>Home Screen</Text>
      </ImageBackground>
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 10,
        backgroundColor: colors.card,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center", padding: 10 }}
          >
            <FontAwesome5
              name={icons[route.name] || "question-circle"} // Підставлення іконки
              size={24}
              solid={isFocused}
              style={{ color: isFocused ? colors.primary : colors.text }}
            />
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen ImageBackground name="Home" component={HomeScreen} />
      <Tab.Screen name="CalculationPage" component={CalculationPageScreen} />
      <Tab.Screen name="Settings" component={Sampler} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Напівпрозорий чорний фон
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});

export default MyTabs;
