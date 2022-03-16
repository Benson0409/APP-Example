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
  const { title, artist, price, url, image, description } = route.params;
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
        <Text style={styles.discountStyle}>Discount Now!</Text>
        <Text style={styles.priceStyle}>Price: ${price}</Text>
        <Button onPress={() => Linking.openURL(url)} title="Buy Now !" />
      </View>
      <View style={styles.cardContainerStyle}>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: 200,
    width: null,
  },
  cardContainerStyle: {
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  discountStyle: {
    color: "#6099E4",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  priceStyle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 40,
    marginVertical: 20,
  },
});

export default Detail;
