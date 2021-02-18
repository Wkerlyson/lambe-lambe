import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from 'react-navigation'
import Feed from "./screens/Feed";
import Test from './screens/Test';



const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={25} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: Test,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='photo-camera' size={25} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: Test,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='account-circle' size={25} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteHome: 'Feed',
    tabBarOptions: {
        activeTintColor: '#0a0742',
        inactiveTintColor: '#bdbdbd',
        showLabel: false
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

export default MenuNavigator