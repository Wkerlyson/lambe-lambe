import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { Alert, Text, View, ScrollView } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';

export default class AddPhoto extends Component {
    state = {
        image: null,
        comment: ''
    }

    pickImageLibrary = () => {
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 600,
                maxWidth: 800,
            },
            (res) => {
                this.setState({ image: { uri: res.uri } })
            }
        )
    }

    pickImageCamera = () => {
        ImagePicker.launchCamera(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 600,
                maxWidth: 800,
            },
            (res) => {
                this.setState({ image: { uri: res.uri } })
            }
        )
    }

    save = async () => {
        Alert.alert('Imagem Adicionada', this.state.comment)
    }

    render() {
        return (
            <>
                <Header />
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>Compartilhe uma imagem</Text>

                        <View style={styles.bottons}>
                            <TouchableOpacity onPress={this.pickImageCamera} style={styles.button}>
                                <Icon name='camera' size={15} />
                                <Text style={styles.buttonText}> Câmera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.pickImageLibrary} style={styles.button}>
                                <Icon name='photo-library' size={15} />
                                <Text style={styles.buttonText}> Galeria</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image}
                                source={{ uri: this.state.image?.uri }}
                            />
                        </View>
                        <TextInput placeholder="Algum comentário para a foto?" style={styles.input}
                            value={this.state.comment}
                            onChangeText={comment => this.setState({ comment })} />
                        <TouchableOpacity onPress={this.save} style={styles.buttonSave}>
                            <Text style={styles.buttonTextSave}>salvar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 20,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#f4f4f4',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 5,
        padding: 20,
    },
    buttonSave: {
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
        color: 'black'
    },
    buttonTextSave: {
        fontSize: 15,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%'
    },
    bottons: {
        flexDirection: 'row'
    }
})







/*import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Platform,
    SafeAreaView,
} from 'react-native';
import { Button } from './Button';
import * as ImagePicker from 'react-native-image-picker';


export default function Test() {
    const [response, setResponse] = React.useState(null);

    return (
        <SafeAreaView>
            <ScrollView>
                <Button
                    title="Take image"
                    onPress={() =>
                        ImagePicker.launchCamera(
                            {
                                mediaType: 'photo',
                                includeBase64: false,
                                maxHeight: 200,
                                maxWidth: 200,
                            },
                            (response) => {
                                setResponse(response);
                            },
                        )
                    }
                />

                <Button
                    title="Select image"
                    onPress={() =>
                        ImagePicker.launchImageLibrary(
                            {
                                mediaType: 'photo',
                                includeBase64: false,
                                maxHeight: 200,
                                maxWidth: 200,
                            },
                            (response) => {
                                setResponse(response);
                            },
                        )
                    }
                />

                <Button
                    title="Take video"
                    onPress={() =>
                        ImagePicker.launchCamera({ mediaType: 'video' }, (response) => {
                            setResponse(response);
                        })
                    }
                />

                <Button
                    title="Select video"
                    onPress={() =>
                        ImagePicker.launchImageLibrary({ mediaType: 'video' }, (response) => {
                            setResponse(response);
                        })
                    }
                />

                <View style={styles.response}>
                    <Text>Res: {JSON.stringify(response)}</Text>
                </View>

                {response && (
                    <View style={styles.image}>
                        <Image
                            style={{ width: 200, height: 200 }}
                            source={{ uri: response.uri }}
                        />
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        marginVertical: 24,
        marginHorizontal: 24,
    },
    image: {
        marginVertical: 24,
        alignItems: 'center',
    },
    response: {
        marginVertical: 16,
        marginHorizontal: 8,
    },
});*/