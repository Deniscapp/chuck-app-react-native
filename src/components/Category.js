import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Badge } from "react-native-elements";

const Category = ({ item, handleCategory }) => {
  return (
    <Badge 
        value={item}
        onPress={() =>  handleCategory(item)} 
        containerStyle={{ backgroundColor: "#e1621d" }} 
        wrapperStyle={{ marginRight: 5, marginBottom: 5 }} 
    />
  );
};

export default Category;
