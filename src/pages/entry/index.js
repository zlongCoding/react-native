import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper';
const  { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    // width: width,
    // height: height
  },
  slide1: {
    width: width,
    height: height,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#000",
  },
  slide2: {
    width: width,
    height: height,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#1890ff',
  },
  slide3: {
    width: width,
    height: height,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  activeDot: { 
    backgroundColor: "red", 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3, 
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1890ff',
    padding: 10
  },

})

export default class Entry extends Component {
  constructor(props) {
    super(props)
  }
  onPress = () => {
    this.props.firstEntryApp()
  }
  render() {
    return (
      <Swiper
        style={styles.swiper}
        loop={false}
        // dot={styles.dot}
        activeDot={<View style={styles.activeDot}/>}
        // paginationStyle={{ bottom: 10 }}
        >
        <View style={styles.slide1}>
          <Text style={styles.text}>11111</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>222</Text>
        </View>
        <View style={styles.slide3}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
            underlayColor= "#40a9ff"
          >
            <Text style={styles.text}>马上体验</Text>
          </TouchableHighlight>
        </View>
      </Swiper>

    );
  }
}
