import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Popular = (props) => {
  let { album } = props;
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image style={styles.imageStyle} source={{ uri: album.image }} />
        </View>
      </View>
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}>{album.title}</Text>
        <Text style={styles.headerContentStyle}>{album.artist}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: "normal",
  },
  headerContentStyle: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
    width: "100%",
    opacity: 0.5,
    marginTop: 8,
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1,
  },
  imageStyle: {
    height: 200,
    width: 140,
  },
});

export default Popular;
