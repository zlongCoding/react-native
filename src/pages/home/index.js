import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import My from "../my"
import ChatList from "../chat/chatList"
import ChatMune from "../chat/chatMune"
import HomeIconWithBadge from "./iconTip"

const RouterNames = {
  ChatMune: "消息",
  ChatList: "联系人",
  My: "我的",
}
const TabNavigator = createBottomTabNavigator({
  [RouterNames.ChatMune]: ChatMune,
  [RouterNames.ChatList]: ChatList,
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