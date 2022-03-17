import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Button,
  Linking,
} from "react-native";

const Detail = ({ route }) => {
  const { title, artist, price, url, image, descriptions } = route.params;
  return (
    <ScrollView>
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.cardContainerStyle}>
        <Text style={styles.titleIntroduce}>{title}</Text>
        <Text style={styles.introduceStyle}>{artist}</Text>
        <Text style={styles.describeStyle}>{descriptions}</Text>
        <Button onPress={() => Linking.openURL(url)} title="Buy Now !" />
      </View>
      {/* <View style={styles.cardContainerStyle}>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Artist: </Text>
          {artist}
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Title: </Text>
          {title}
        </Text>
        <Text style={{ marginTop: 15, fontWeight: "bold" }}>Descriptions:</Text>
        <Text style={{ lineHeight: 18 }}>
          {"\t"}
          {description}
        </Text>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: 300,
    width: 210,
    alignSelf: "center",
  },
  cardContainerStyle: {
    // backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  titleIntroduce: {
    color: "black",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  introduceStyle: {
    fontWeight: "400",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 20,
    fontFamily: "Roboto",
    color: "gray",
  },
  describeStyle: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Roboto",
  },
});

export default Detail;
