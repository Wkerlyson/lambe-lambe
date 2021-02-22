import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import Header from '../components/Header';

export default class Profile extends Component {


    logout = () => {
        this.props.navigation.navigate('Auth')
    }
    render() {
        const options = { email: 'wkerlyson.batista@uece.br', secure: true }

        return (
            <>
                <View style={styles.container}>
                    <Gravatar options={options} style={styles.avatar} />
                    <Text style={styles.nickname}>Wkerlyson Batista</Text>
                    <Text style={styles.email}>wkerlyson.batista@gmail.com</Text>
                    <TouchableOpacity onPress={this.logout} style={styles.button}>
                        <Text style={styles.buttonText}>sair</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 13
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0a0742',
        marginTop: 30,
        marginLeft: 5,
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 40
    },
    buttonText: {
        fontSize: 17,
        color: '#fff'
    }
})