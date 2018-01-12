// @flow
import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Relay, { graphql, QueryRenderer } from "react-relay";
import environment from "../Environment";
import { List, ListItem } from "react-native-elements";
import ChuckMain from "./ChuckMain";

class ChuckIntro extends Component {
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
                    <ChuckMain
                      categories={categories}
                    />
              <ScrollView>
                
                {/* <List>
                  {fact.map((item, i) => (
                    <ListItem
                      roundAvatar
                      key={i}
                      title="True fact about Chuck Norris"
                      subtitle={
                        <View style={styles.subtitleView}>
                          <Text style={styles.ratingText}>{item.value}</Text>
                        </View>
                      }
                      avatar={item.icon_url}
                    />
                  ))}
                </List> */}
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

styles = StyleSheet.create({
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    ratingImage: {
      height: 19.21,
      width: 100
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    }
  })

export default ChuckIntro;
