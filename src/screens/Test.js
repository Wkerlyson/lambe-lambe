import React, { Component } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import Header from '../components/Header';

export default class Test extends Component {

    render() {
        return (
            <View>
                <Header />
                <Text>Photo</Text>
            </View>
        );
    }
}