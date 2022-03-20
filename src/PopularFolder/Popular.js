import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Linking,
} from "react-native";

import Starbar from "../Starbar";
import ablumData from "../popular.json";
const Popular = ({ book, navigation }) => {
  //let { album } = props;
  return (
    <View style={{ flexDirection: "column", marginLeft: 20 }}>
      <View style={styles.cardContainerStyle}>
        <Pressable onPress={() => navigation.navigate("Detail", book)}>
          <View style={styles.cardSectionStyle}>
            <Image style={styles.imageStyle} source={{ uri: book.image }} />
          </View>
        </Pressable>
      </View>
      <View style={styles.headerContainerStyle}>
        <Starbar star={book.star} />
        <Text style={styles.headerTitleStyle}>{book.title}</Text>
        <Text style={styles.headerContentStyle}>{book.artist}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#ddd",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 2,
    // marginLeft: 5,
    // marginRight: 16,
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
    fontWeight: "600",
    width: 140,
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
    // backgroundColor: "#fff",
    // borderColor: "#ddd",
    // borderBottomWidth: 1,
  },
  imageStyle: {
    height: 240,
    width: 160,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    // marginRight: 16,
    paddingRight: 16,
  },
});

export default Popular;
