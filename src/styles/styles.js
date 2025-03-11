import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    tintColor: "rgba(255, 255, 255, 0.5)",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundColor: "rgba(0,0,0,0.4)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    tintColor: "rgba(255, 255, 255, 0.5)",
    //padding: 20,
    //borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});

export default styles;
