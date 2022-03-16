import { StyleSheet, StatusBar, SafeAreaView, FlatList } from "react-native";
//import { StyleSheet, Text, View } from "react-native";
import Header from "./src/Header";
// import PopularList from "./src/PopularList";
import Navigation from "./src/navagation/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
