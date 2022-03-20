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
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import albumData from "./popular.json";
const Starbar = (props) => {
    const starDecide=(props)=>{
    if({props.star}==1)
      {
        <View>
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons
            name="star-outline"
            color={"#EDEDEF"}
            size={30}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={"#EDEDEF"}
            size={30}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={"#EDEDEF"}
            size={30}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={"#EDEDEF"}
            size={30}
          />
        </View>
      }
      else if({props.star}==2)
      {
        <View>
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons
            name="star-outline"
            color={"#EDEDEF"}
            size={30}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={"#EDEDEF"}
            size={30}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={"#EDEDEF"}
            size={30}
          />
        </View>
      }
      else if({props.star}==3)
      {
        <View>
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons
            name="star-outline"
            color={"#EDEDEF"}
            size={30}
          />
          <MaterialCommunityIcons
            name="star-outline"
            color={"#EDEDEF"}
            size={30}
          />
        </View>
      }
      else if({props.star}==4)
      {
        <View>
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons
            name="star-outline"
            color={"#EDEDEF"}
            size={30}
          />
        </View>
      }
      else if({props.star}==5)
      {
        <View>
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
          <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
        </View>
      }
      else{null}
    };
  return (
    starDecide()
  );
};

export default Starbar;
