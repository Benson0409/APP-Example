import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>JJ 精 選 專 輯 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "black",
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
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default Header;
