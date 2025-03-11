import React from "react";
import { View, Image, ImageBackground, StyleSheet } from "react-native";

const OverlayImageExample = () => {
  return (
    <ImageBackground
      source={require("..//../assets/images/red_JAC_S2compactSUV.jpg")}
      style={styles.background}
    >
      <Image
        source={require("..//../assets/images/A white JAC S3 NEW compact SUV.jpg")}
        style={styles.overlay}
      />
    </ImageBackground>
  );
};

export default OverlayImageExample;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Покриває весь екран
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    // width: 100,
    // height: 100,

    position: "absolute", // Накладає поверх
    resizeMode: "cover", // Покриває весь екран
    tintColor: "rgba(255, 255, 255, 0.5)",
    // top: 50, // Відступ зверху
    // left: 50, // Відступ зліва
  },
});
