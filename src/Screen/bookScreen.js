import React from "react";
import { View } from "react-native";
import PopularList from "../PopularFolder/PopularList";
import albumData from "../popular.json";

const BookScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <PopularList list={albumData.albumList} navigation={navigation} />
    </View>
  );
};

export default BookScreen;
