import React from "react";
import { View } from "react-native";
import PopularList from "../PopularList";
import albumData from "../popular.json";

const bookScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <PopularList list={albumData.albumList} navigation={navigation} />
    </View>
  );
};

export default bookScreen;
