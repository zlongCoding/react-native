import React from "react";
import { Alert, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LargeList } from "react-native-largelist-v3";
import Swipeout from 'react-native-swipeout';

var swipeoutBtns = [
  {
    backgroundColor: '#c8c8c8',
    color: '#fff',
    underlayColor: "#dcdcdc",
    text: '置顶'
  },{
    backgroundColor: '#ff0000d4',
    color: '#fff',
    underlayColor: "#ff0000b0",
    text: '删除'
  }
]
export default class HeightEqualExample extends React.Component {
  _sectionCount = 10;
  _rowCount = 10;
  
  componentDidMount() {
    console.log(111)
    this.state = {
      switchRoute: false
    }
  }
  render() {
    const data = [];

    data.push({
      items: [1,2]
    });
    
    return (
        <LargeList
          style={styles.container}
          data={data}
          heightForIndexPath={() => 80}
          renderIndexPath={this._renderIndexPath}
        />
    );
  }
  onOpen=()=> {
    this.setState({
      switchRoute: true
    })
  }
  onClose=() => {
    const { switchRoute } = this.state
      
    console.log(switchRoute)
    if (switchRoute) {
      this.props.navigation.navigate('Detail', {
        rowData: 1111
      })
    }
    console.log(switchRoute)
    this.setState({
      switchRoute: false
    })
  }



  _renderIndexPath = ({ section: section, row: row }) => {
    return (
     
      <View style={styles.row}> 
        <Swipeout 
          onClose={this.onClose}
          onOpen={this.onOpen}
           autoClose backgroundColor="#fff" right={swipeoutBtns} style={styles.Swipeout}>

          <View style={styles.swiperContainer} onPress={this.onPressRoute} >
            <View onPress={this.onPressRoute}>
              <Image source={require('../../static/images/user.png')} style={styles.userImage} />
            </View>
            <View style={styles.content}>
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.contentTil}>1111</Text>
                <Text style={styles.contentDes}>1111</Text>
              </View>
              <View>
                <Text style={styles.time}>11111</Text>
              </View>
            </View>
          </View>
        </Swipeout>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: 'space-between',
    // backgroundColor: "red", 
  },
  contentTil: {
    fontSize: 20
  },
  Swipeout: {
    flex: 1,
    // height: 100%,
  },
  contentDes: {
    marginBottom: 10,
    fontSize: 18,
    color: "#777"
  },
  time: {
    fontSize: 16,
    color: "#8d8d8d"
  },
  row: {
    flex: 1,
    borderColor: '#eee',
    borderBottomWidth: 1,
    
  },
  swiperContainer: {
    // flex: 1,
    flexDirection: "row",
    height: 80,
    // justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
});