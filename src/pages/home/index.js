import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from "react-native";

import My from "../my"
import ChatList from "../chat/chatList"
import ChatMune from "../chat/chatMune"
import HomeIconWithBadge from "./iconTip"
import ChatContent from "../chat/chatContent"
const RouterNames = {
  ChatMune: "消息",
  ChatList: "联系人",
  My: "我的",
}

const headerStyle = {
  ios: {
    height: 52,
    paddingTop: 14,
    backgroundColor: '#1890ff'
  },
  android: {
    height: 0,
    paddingTop: 0
  }
}

const ChatContentOptions = {
  screen: ChatContent,
  navigationOptions: ({ navigation }) => ({
    title: `${navigation.state.params.rowData} 的创意`,
    headerStyle: headerStyle[Platform.OS],
    headerTintColor: '#fff',
    tabBarVisible: Platform.OS === 'android',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-videocam' : 'ios-videocam-outline'}
        color={tintColor}
        size={28}
      />
    )
  })
}
const ChatLists = createStackNavigator({
  List: {
    screen: ChatList,
    navigationOptions: {
      headerTitle: '联系人',
      headerStyle: headerStyle[Platform.OS],
      headerTintColor: '#fff',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-videocam' : 'ios-videocam-outline'}
          color={tintColor}
          size={28}
        />
      )
    }
  },
  Detail: ChatContentOptions
})
const ChatMunes = createStackNavigator({
  ChatMune: {
    screen: ChatMune,
    navigationOptions: {
      headerTitle: '消息',
      headerStyle: headerStyle[Platform.OS],
      headerTintColor: '#fff',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-videocam' : 'ios-videocam-outline'}
          color={tintColor}
          size={28}
        />
      )
    }
  },
  Detail: ChatContentOptions
})
const TabNavigator = createBottomTabNavigator({
  [RouterNames.ChatMune]: ChatMunes,
  [RouterNames.ChatList]: ChatLists,
  [RouterNames.My]: My,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let IconComponent = Ionicons
        let iconName
        if (routeName === RouterNames.My) {
          iconName = `ios-contact`
          // IconComponent = HomeIconWithBadge; 
        } else if (routeName === RouterNames.ChatList) {
          iconName = `ios-contacts`
        } else if (routeName === RouterNames.ChatMune) {
          iconName = `ios-chatbubbles`
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: '#1890ff',
      inactiveTintColor: 'gray',
    },
  });

export default createAppContainer(TabNavigator);