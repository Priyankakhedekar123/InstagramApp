import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Content, Icon, Thumbnail } from "native-base";
import CardComponent from "../Components/CardComponent"
//import { Container } from '../../BasicNavigation-populating-feed/app/styles';


export default class Home extends React.Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )

    }


    render() {
        return (
            <Container style={styles.container}>
                <Content>

                    <View style={{ height: 100 }}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 7 }}>
                            <Text style={{fontWeight: "bold"}}> Stories </Text>

                            <View style={{flexDirection: "row", alignItems: 'center'}}>
                                <Icon name= "md-play" style = {{fontSize: 14}}> </Icon>
                                <Text style={{fontWeight: "bold"}}> Watch All </Text>
                            </View>

                        </View>

                        <View style={{ flex: 3 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5,
                                }}
                            >
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self1.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self2.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self3.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self1.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self2.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self3.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self1.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self2.jpg')} />
                                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={require('../Assets/self3.jpg')} />
                            </ScrollView>
                        </View>


                    </View>

                    <CardComponent profileImage={require('../Assets/self3.jpg')} image={require('../Assets/Greenery.jpg')} likes="10" />
                    <CardComponent profileImage={require('../Assets/self2.jpg')} image={require('../Assets/Home.jpg')} likes="256" />
                    <CardComponent profileImage={require('../Assets/self1.jpg')} image={require('../Assets/Scenery.jpg')} likes="500" />
                    <CardComponent profileImage={require('../Assets/self.jpg')} image={require('../Assets/Nature.jpg')} likes="1256" />
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

