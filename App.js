/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from 'react-navigation';

import ChuckIntro from "./src/components/ChuckIntro";
import ChuckList from "./src/components/ChuckList";

const ChuckApp = StackNavigator(
  {
    Home: { screen: ChuckIntro },
    FactsList: { screen: ChuckList }
  },
  {
    initialRouteName: 'Home',
  },
);

export default () => <ChuckApp />;

