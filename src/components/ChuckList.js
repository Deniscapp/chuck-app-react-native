import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Relay, { graphql, QueryRenderer } from "react-relay";
import environment from "../Environment";
import ChuckItem from './ChuckItem';

class ChuckList extends Component {
  static navigationOptions = props => ({
    title: `Facts on: "${props.navigation.state.params.query}"`,
  });

  renderItem({ item }) {
    return <ChuckItem item={item} />
  }

  render() {
    const { query } = this.props.navigation.state.params;
    return (
      <QueryRenderer
          environment={environment}
          variables={{
            text: query
          }}
          query={graphql`
              query ChuckListQuery($text: String) {
                fact(text: $text) {
                  value,
                  icon_url,
                  id
                }
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
              const { fact } = props;
              return (
                <FlatList
                  data={fact}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.id}
                />
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
};

export default ChuckList;
