import React from 'react'
import { GiftedChat, Actions, SystemMessage, Send, Image } from 'react-native-gifted-chat';

import { Text, View, Button } from "react-native";
export default class Example extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        }
      ],
    })
  }

  onSend(messages = []) {
    // messages.unshift(this.state.messages[0])
    // console.log(messages)
    // // messages[0].user
    // let msg = [
    //   {
    //     _id: messages[0]._id,
    //     text: messages[0].text,
    //     createdAt: messages[0].createdAt,
    //     user: messages[0].user
    //   }
    // ]
    // messages[0].text = ""
    // msg[0]= messages[0].user
    // console.log(msg)
    // msg[0].text = messages[0].text
    // msg[0].user = {
    //   name: "312121",
    //   avatar: "https://placeimg.com/140/140/any"
    // }
    // msg.user.name = "312121"
    // msg.user.avatar = "https://placeimg.com/140/140/any"
    // messages[0].user._id = 1
    // messages[0].user.name = '3212121121'
    // // messages[0].system=  true
    // messages[0].user.avatar = 'https://placeimg.com/140/140/any'
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  
  sendMsg = (meg) => {
    console.log(meg)
  }
  renderSend = (props) => {
    console.log(props)
    return (
      <Send
        {...props}
      >
        <View style={{ marginRight: 10, marginBottom: 5 }}>
          <Button title="发送" resizeMode={'center'} onPress={() => props.onSend(props)} />
          {/* <Image source={require('../../static/images/user.png')} resizeMode={'center'} /> */}
        </View>
      </Send>
    );
  }  
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        placeholder="发送消息"
        renderTime={(time) => time}
        // showUserAvatar
        // renderSend={this.renderSend}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
          avatar: 'https://placeimg.com/140/140/any'
        }}
      />
    )
  }
}