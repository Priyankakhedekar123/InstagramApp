import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Icon, Left, Right, Button, cardBody } from "native-base";

export default class CardComponents extends React.Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={this.props.profileImage} />
                        <Body>
                            <Text>Priyanka</Text>
                            <Text note> 17th June </Text>
                        </Body>
                    </Left>

                </CardItem>

                <CardItem cardBody>
                    <Image source={this.props.image}
                        style={{ height: 200, width: null, flex: 1 }}
                    />
                </CardItem>

                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ height: 20 }}>
                    <Text>{this.props.likes} Likes
        </Text>
                </CardItem>
                <CardItem>
                    <Body>

                        <Text>
                        <Text style={{fontWeight: "900"}}> Priyanka  </Text>
                        Upgrading to a new version of React Native requires updating the react-native, react, and expo package versions, and setting the correct sdkVersion in app.json. See the versioning guide for up-to-date information about package version compatibility.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
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

