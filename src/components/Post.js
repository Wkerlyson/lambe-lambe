import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Autor from './Autor';

class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Autor email='wkerlyson.batista@uece.br' nickname='Wkerlyson' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})

export default Post