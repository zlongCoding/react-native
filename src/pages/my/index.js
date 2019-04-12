import React, { Component } from 'react';
import { Text, View } from 'react-native';

class My extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>我的详情!</Text>
      </View>
    );
  }
}


export default My;