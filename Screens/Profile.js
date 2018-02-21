import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { Button } from 'react-native-elements'
import { Icon } from "native-base";
import {TabNavigator, StackNavigator} from "react-navigation";
import Home from "../Screens/Home"

export default class Profile extends React.Component {


    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor }} />
        )

    }

    onPressLearnMore() {
         //Alert.alert("adsklfjlkasjdla sjldkalskdj lkas jd")
         this.props.navigation.navigate('Home')
    }
    

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.navigate('Details')}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
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

