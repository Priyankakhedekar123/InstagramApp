// import React from "react";
// import { TabNavigator } from "react-navigation";

// import Feed from "../screens/Feed";
// import Me from "../screens/Me";

// export const Tabs = TabNavigator({
//   Feed: {
//     screen: Feed
//   },
//   Me: {
//     screen: Me
//   }
// });

import React from "react";
import {TabNavigator, StackNavigator} from "react-navigation";
import {Platform} from "react-native";

import Likes from "../Screens/Likes"
import Home from "../Screens/Home"
import Profile from "../Screens/Profile"
import Search from "../Screens/Search"
import Media from "../Screens/Media"
import Details from "../Screens/Details"

import MainScreen from "../Config/MainScreen"



export const AppStackNavigator = StackNavigator({

    MainScreen: {
        screen: MainScreen
    },
    
})

export const profileStack = StackNavigator({

    Profile: {
        screen: Profile
    },
    Details:{
        screen: Details
    }

})

export const Tabs = TabNavigator({

    Home: {
        screen: Home
    },
    Search: {
        screen: Search
    },
    Media: {
        screen: Media
    },
    Likes: {
        screen: Likes
    },
    Profile: {
        screen: profileStack
    },
    
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ... Platform.select({
                android: {backgroundColor:"white"}
            }) 
        },
        activeTintColor: "crimson",
        inactiveTintColor: "grey",
        showLabel: false,
        showIcon: true,
    }
})


