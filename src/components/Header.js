import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import icon from '../../assets/imgs/icon.png';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    {/*<Image source={icon} style={styles.image} /> -->*/}
                    <Text style={styles.title}>Instagram</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 40,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 40,
        fontSize: 30
    }
})

export default Header