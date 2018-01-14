import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const ChuckItem = ({ item }) => {
  return (
      <ListItem
        containerStyle={{ backgroundColor: 'white' }}
        roundAvatar
        key={item.id}
        title="True fact about Chuck Norris"
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>{item.value}</Text>
          </View>
        }
        avatar={item.icon_url}
      />
  );
};

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

export default ChuckItem;
