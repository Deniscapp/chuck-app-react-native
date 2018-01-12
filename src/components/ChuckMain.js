import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Header, Badge } from "react-native-elements";
import Category from './Category';

class ChuckMain extends Component {

  renderCategories(categories) {
    const _categories = categories.map((category, i) => <Category item={category} key={i} /> );
    return _categories
  }

  render() {
    const { categories } = this.props;
    return (
      <View style={{}}>
        <Header
          backgroundColor="#e1621d"
          centerComponent={{ text: "CHUCK FACTS", style: { color: "#fff" } }}
        />
        <Image style={{width: 200, height: 250, alignSelf: 'center'}} source={require('../assets/chuck.png')} />
        <View style={{ flexDirection: 'row', marginTop: 20, flexWrap: 'wrap', justifyContent: 'center' }} > 
          {this.renderCategories(categories)}
        </View>
      </View>
    );
  }
}

export default ChuckMain;
