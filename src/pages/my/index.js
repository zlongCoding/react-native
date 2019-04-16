import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class My extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatarSource: null
    }
  }
  changeImage=() => {
    console.log(1111)
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeImage}>
         <View style={styles.fieldItem}>
          <Text>头像</Text>
          <Ionicons name="add-circle-outline" size={60} color={"gray"} />
         </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.msgApp}>
          <View style={styles.clientHeight}>
            <Text>用户名</Text>
            <Text>我们发发生</Text>
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.msgApp}>
          <TouchableOpacity>
          <View style={styles.clientHeight}>
            <Text>用户设置</Text>
            <AntDesign name="right" size={20} color={"gray"} />
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.msgApp}>
          <TouchableOpacity>
          <View style={styles.clientHeight}>
            <Text>版本信息</Text>
            <AntDesign name="right" size={20} color={"gray"} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.clientHeight}>
            <Text>产品说明</Text>
            <AntDesign name="right" size={20} color={"gray"} />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff'
  },
  fieldItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  clientHeight: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  msgApp: {
    marginTop: 20,
    borderColor: '#eee',
    borderTopWidth: 1,
  }
})





export default My;