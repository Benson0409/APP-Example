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
  if (props.star == 1) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
      </View>
    );
  } else if (props.star == 2) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
      </View>
    );
  } else if (props.star == 3) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
      </View>
    );
  } else if (props.star == 4) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
      </View>
    );
  } else if (props.star == 5) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FFC41F"} size={18} />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  starFlex: {
    flexDirection: "row",
  },
});

export default Starbar;
// const Starbar = (props) => {
//   // const starDecide=(props)=>{
//   if (props == 1) {
//     <View>
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star-outline" color={"#EDEDEF"} size={30} />
//       <MaterialCommunityIcons name="star-outline" color={"#EDEDEF"} size={30} />
//       <MaterialCommunityIcons name="star-outline" color={"#EDEDEF"} size={30} />
//       <MaterialCommunityIcons name="star-outline" color={"#EDEDEF"} size={30} />
//     </View>;
//   } else if (props == 2) {
//     <View>
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star-outline" color={"#EDEDEF"} size={30} />
//       <MaterialCommunityIcons name="star-outline" color={"#EDEDEF"} size={30} />
//       <MaterialCommunityIcons name="star-outline" color={"#EDEDEF"} size={30} />
//     </View>;
//   } else if (props == 3) {
//     <View>
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star-outline" color={"#EDEDEF"} size={30} />
//       <MaterialCommunityIcons name="star-outline" color={"#EDEDEF"} size={30} />
//     </View>;
//   } else if (props == 4) {
//     <View>
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star-outline" color={"#EDEDEF"} size={30} />
//     </View>;
//   } else if (props == 5) {
//     <View>
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//       <MaterialCommunityIcons name="star" color={"#FFC41F"} size={30} />
//     </View>;
//   } else {
//     null;
//   }
//   // };
//   return (
//     // starDecide()
//     Starbar()
//   );
// };

// export default Starbar;
