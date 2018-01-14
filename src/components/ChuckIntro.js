// @flow
import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Relay, { graphql, QueryRenderer } from "react-relay";
import environment from "../Environment";
import { List, ListItem } from "react-native-elements";
import ChuckMain from "./ChuckMain";

class ChuckIntro extends Component {
  static navigationOptions = {
    title: 'Chuck Facts',
  };
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ChuckIntroQuery {
            categories
          }
        `}
        render={({ error, props }) => {
          if (error) {
            console.log(error);
            return (
              <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Text>{error.message}</Text>
              </View>
            );
          } else if (props) {
            const { categories } = props;
            return (
              <View>
                <ScrollView>
                <ChuckMain categories={categories} />
              </ScrollView>
            </View>
            );
          } else {
            return (
              <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Text>{"Loading..."}</Text>
              </View>
            );
          }
        }}
      />
    );
  }
}



export default ChuckIntro;
