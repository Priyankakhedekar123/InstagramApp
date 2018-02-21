import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from "native-base";
import {Tabs} from "../Config/Tab"

export default class MainScreen extends React.Component {

    static navigationOptions = {

        headerLeft: <Icon name = "ios-camera-outline" style={{paddingLeft: 10}}/>,
        title: "Instagram",
        headerRight: <Icon name = "ios-send-outline" style= {{paddingRight: 10}}/>,

    }


  render() {
    return (
      <Tabs/>
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

