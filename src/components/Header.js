import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    {/*<Image source={icon} style={styles.image} /> -->*/}
                    <Text style={styles.title}>Instagran</Text>
                    <View style={styles.camera}>
                        <TouchableOpacity onPress={() => { Alert.alert('Direct', 'Quem sabe no futuro...') }}>
                            <Icon name='send' color='#0a0742' size={25} style={{ transform: [{ rotate: '-38deg' }] }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomColor: 1,
        borderColor: '#BBB',
        width: '100%',
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
        color: '#0a0742',
        fontFamily: 'shelter',
        height: 40,
        fontSize: 30
    },
    camera: {
        flex: 1,
        flexDirection: 'row-reverse',
    }
})

export default Header