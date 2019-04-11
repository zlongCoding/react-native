import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet
} from "react-native"
import { loginState } from "../../config/app"
import { TextField } from 'react-native-materialui-textfield';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeButton from "react-native-really-awesome-button";
import Toast from 'react-native-easy-toast'


export default class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: null,
      passWord: null,
      secureTextEntry: true,
      pwdFouse: false,
      countFouse: false
    }
  }


  login = () => {
    const { name, passWord} = this.state
    if (!name) {
      this.refs.toast.show('请填写用户名');
      return

    }
    if (!passWord) {
      this.refs.toast.show('请填写密码');
      return
    }
    this.props.login(loginState)
  }
  render() {
    const { countFouse, secureTextEntry, pwdFouse} = this.state
    const bgButton = {
      backgroundDarker: "#1890ff",
      backgroundProgress:"#1890ff",
      backgroundPlaceholder: "#1890ff",
      backgroundColor: "#1890ff",
      backgroundShadow:"#1890ff"
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>登录MrAPP{this.props.logined}</Text>
        <View style={styles.content}>
          <TextField
             label='账号'
            title='请输入账号'
            maxLength={20}
            characterRestriction={20}
            renderAccessory={() => <Icon name="user" size={20} color={countFouse ? "#1890ff" : "#ccc"} />}
            onChangeText={(name) => this.setState({ name }) }
            onFocus={() => {
              this.setState({
                countFouse: true
              })
            }}
            onBlur={() => {
              this.setState({
                countFouse: false
              })
            }}
           />
        </View>
        <View style={styles.content}>
           <TextField
            // ref={this.passwordRef}
            // value={password}
            secureTextEntry={secureTextEntry}
            autoCapitalize='none'
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            clearTextOnFocus={true}
            onFocus={() => {this.setState({
              pwdFouse: true
            })}}
            onBlur={() => {
              this.setState({
                pwdFouse: false
              })
            }}
            // onSubmitEditing={this.onSubmitPassword}
            returnKeyType='done'
            label='Password'
            // error={errors.password}
            title='请输入密码'
            maxLength={20}
            characterRestriction={20}
            renderAccessory={() => <Icon name="eye" size={20} color={pwdFouse ? "#1890ff" : "#ccc"} />}
            onChangeText={(passWord) => this.setState({ passWord }) }
           />
        </View>
        <View style={styles.login}>
          <AwesomeButton onPress={this.login} paddingHorizontal={150} textSize={ 20 }{...bgButton}>登录</AwesomeButton>
        </View>
        <Toast ref="toast" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  content: {
    width: "80%"
  },
  header: {
    marginBottom: 20,
    fontSize: 24
  },
  login: {
    marginTop: 30
  }
});


