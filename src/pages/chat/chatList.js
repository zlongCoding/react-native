import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { LargeList } from "react-native-largelist-v3";


export default class HeightEqualExample extends React.Component {
  _sectionCount = 10;
  _rowCount = 10;

  render() {
    const data = [];

    data.push({
      items: [1, 2]
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
  routeGo=() => {
    this.props.navigation.navigate('Detail', {
      rowData: 1111
    })
  }


  _renderIndexPath = ({ section: section, row: row }) => {
    return (

      <View style={styles.row}>
        <TouchableOpacity onPress={this.routeGo}>
          <View style={styles.swiperContainer}>
            <View>
              <Image source={require('../../static/images/user.png')} style={styles.userImage} />
            </View>
            <View style={styles.content}>
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.contentTil}>1111</Text>
                <Text style={styles.contentDes}>1111</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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

    borderColor: '#eee',
    borderBottomWidth: 1,

  },
  swiperContainer: {
    flexDirection: "row",
    height: 80,
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