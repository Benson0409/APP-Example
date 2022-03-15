import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>Top Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4,
  },
  textStyle: {
    fontSize: 40,
    color: "#000",
    fontWeight: "bold",
  },
});

export default Header;
