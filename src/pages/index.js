import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../actions/app'
import {Platform, StyleSheet, Text, View} from 'react-native';

import Entry from "./entry"
import Login from "./user/login"
import Home from "./home"

import { loginoutState } from "../config/app"
class App extends Component{
  componentDidMount(){
    this.props.willEntryApp()
  }
  render() {
    // alert(this.props.user)
    if (!this.props.entry) {
      return <Entry {...this.props}/>
    }
    if (this.props.logined == loginoutState) {
      return <Login {...this.props}/>
    }
    return <Home {...this.props}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

function mapStateToProps(state) {
  console.log(state)
  return {
    user: state.app.user,
    entry: state.app.entry,
    logined: state.app.logined
  }
}

function actionCreators(dispatch) {
  return bindActionCreators(appActions, dispatch)
}

export default connect(
  mapStateToProps,
  actionCreators
)(App)