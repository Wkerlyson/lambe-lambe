import React, { Component } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import Header from '../components/Header';

export default class Profile extends Component {
    render() {
        return (
            <>
                <Header />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text >Profile</Text>
                </View>
            </>
        );
    }
}