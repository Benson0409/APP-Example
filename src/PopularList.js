import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import PopularDetail from "./PopularDetail";
import Popular from "./Popular";
import sections from "./popular.json";

const PopularList = () => {
  const renderSectionHeader = ({ section }) => (
    <>
      <Text style={styles.sectionHeader}>{section.title}</Text>
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <Popular album={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.title}
        />
      ) : null}
    </>
  );

  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
    return <PopularDetail album={item} />;
  };
  return (
    <SectionList
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: "600",
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    textTransform: "uppercase",
  },
});

export default PopularList;
