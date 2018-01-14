import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
  Image,
  ActivityIndicator
} from 'react-native';
import {
  Header,
  Badge,
  FormLabel,
  FormInput,
  Text,
  List,
  ListItem,
  Button
} from 'react-native-elements';
import Relay, { graphql, QueryRenderer } from 'react-relay';
import environment from '../Environment';
import { withNavigation } from 'react-navigation';
import Category from './Category';
import ChuckList from './ChuckList';
import ChuckItem from './ChuckItem'

@withNavigation
class ChuckMain extends Component {
  constructor(props) {
    super(props);

    this.handleOnChangeText = this.handleOnChangeText.bind(this);
    this.state = { category: "", text: "" };
  }

  static navigationOptions = {
    title: 'Chuck Facts',
  };

  handleSelectCategory(category) {
    this.setState({ category });
  }

  handleOnChangeText(text) {
    this.setState({ text });
  }

  searchFact(text) {
    const { navigate } = this.props.navigation;
    
    navigate('FactsList', { query: text });
  }


  renderCategories(categories) {
    const _categories = categories.map((category, i) => (
      <Category
        handleCategory={this.handleSelectCategory.bind(this)}
        item={category}
        key={i}
      />
    ));
    return _categories;
  }

  render() {
    const { categories } = this.props;
    return (
      <View style={{ backgroundColor: 'white'}} >
        <Image
          style={{ width: 200, height: 250, alignSelf: "center" }}
          source={require("../assets/chuck.png")}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            flex: 1
          }}
        >
          <Text style={{ marginBottom: 10 }} h4> Tap on category to see a fact </Text>
          {this.renderCategories(categories)}
        </View>
        <FormInput
            placeholderTextColor="#e1621d"
            placeholder="Search for a Chuck Norris fact"
            inputStyle={{ fontSize: 18, flex: .5 }}
            onChangeText={text => this.handleOnChangeText(text)}
            value={this.state.text}
          />
        <Button onPress={() => this.searchFact(this.state.text)} title='Go!' raised buttonStyle={{ backgroundColor: '#e1621d'}} />
        <QueryRenderer
          environment={environment}
          variables={{
            categoryName: this.state.category
          }}
          query={graphql`
            query ChuckMainQuery($categoryName: String) {
              category(name: $categoryName) {
                value
                icon_url
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
              return (
                <List>
                  <Text h4 style={{ alignSelf: "center" }}>
                    Chosen category:
                    {this.state.category === ""
                      ? "None"
                      : this.state.category}{" "}
                  </Text>
                  <ChuckItem item={props.category} />
                </List>
              );
            } else {
              return (
                <View style={{ flex: 1, backgroundColor: "#fff", marginTop: 20 }}>
                  <ActivityIndicator size="large" color="#e1621d" />
                </View>
              );
            }
          }}
        />

        
      </View>
    );
  }
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey"
  }
});

export default ChuckMain;
