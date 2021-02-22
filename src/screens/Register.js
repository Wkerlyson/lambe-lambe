import React, { Component } from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { View } from 'react-native';

export default class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput autoFocus={true} style={styles.input}
                    value={this.state.name} placeholder='Nome'
                    onChangeText={name => this.setState({ name })} />

                <TextInput style={styles.input} keyboardType='email-address'
                    value={this.state.email} placeholder='E-mail'
                    onChangeText={email => this.setState({ email })} />

                <TextInput style={styles.input} secureTextEntry={true}
                    value={this.state.password} placeholder='Senha'
                    onChangeText={password => this.setState({ password })} />

                <TouchableOpacity onPress={() => { }} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }
})