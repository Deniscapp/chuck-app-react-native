import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Badge } from "react-native-elements";

const Category = ({ item, key }) => {
  return (
    <Badge 
        value={item}
        onPress={(e) => console.log('pressed',e)} 
        key={key} 
        containerStyle={{ backgroundColor: "#e1621d" }} 
        wrapperStyle={{ marginRight: 5, marginBottom: 5 }} 
    />
  );
};

export default Category;
