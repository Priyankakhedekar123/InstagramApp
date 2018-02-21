import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Tabs, AppStackNavigator} from './Config/Tab'

export default class App extends React.Component {
  render() {
    return (
      //<Tabs/>
      <AppStackNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
