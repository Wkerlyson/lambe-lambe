import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

export default class App extends Component {
  render() {
    const comments = [
      {
        nickname: 'joao.silva',
        comment: 'Excelente foto!'
      },
      {
        nickname: 'rgusta',
        comment: 'Muito ruim! Faço melhor...'
      }
    ]
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require('./assets/imgs/bw.jpg')} comments={comments} />
      </View>
    )
  }
}
