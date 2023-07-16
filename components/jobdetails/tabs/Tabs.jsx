import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

const TabButton = ({ name, acitiveTab, onHandleSearchType }) => (
  <TouchableOpacity
    style={styles.btn(name, acitiveTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name, acitiveTab)}>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, acitiveTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            acitiveTab={acitiveTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
