import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { FlatList, View } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

export default class Feed extends Component {
    state = {
        posts: [
            {
                id: Math.random(),
                nickname: 'wkerlysonb',
                email: 'wkerlyson.batista@uece.br',
                image: require('../../assets/imgs/bw.jpg'),
                comments: [
                    {
                        nickname: 'joh.s',
                        comment: 'Stunning'
                    },
                    {
                        nickname: 'abrell',
                        comment: 'Foto linda. Onde foi tirada?'
                    }
                ]
            }, {
                id: Math.random(),
                nickname: 'jpsilva',
                email: 'israelsantos.cruz@uece.br',
                image: require('../../assets/imgs/fence.jpg'),
                comments: []
            }
        ]
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />}>

                </FlatList>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})