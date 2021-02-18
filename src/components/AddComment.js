import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableWithoutFeedback as Touch, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AddComment extends Component {

    state = {
        comment: '',
        editMode: false
    }

    handleAddComment = () => {
        Alert.alert('Adicionado', this.state.comment)
    }
    render() {
        let commentArea = null

        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder='Pode comentar...'
                        style={styles.input} autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment} />
                    <Touch onPress={() => this.setState({ editMode: false })}>
                        <Icon name='clear' size={20} color='#0a0742' />
                    </Touch>
                </View>
            )
        } else {
            commentArea = (
                <Touch onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name='comment' size={15} color='#0a0742' />
                        <Text style={styles.caption}>
                            Adicione um comentário...
                        </Text>
                    </View>
                </Touch>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 20
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input: {
        width: '90%'
    }
})