/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import LoginForm from './src/components/LoginForm';

import firebase from 'firebase';
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { Header, Button, Spinner } from './src/components/common';


export default class App extends Component {
  state={ loggedIn: null };
  componentWillMount() {
      firebase.initializeApp(
        {
          apiKey: 'AIzaSyA9DhfxU-niABJ_H6o1zTt7surbfodlIDw',
          authDomain: 'auth-46497.firebaseapp.com',
          databaseURL: 'https://auth-46497.firebaseio.com',
          projectId: 'auth-46497',
          storageBucket: 'auth-46497.appspot.com',
          messagingSenderId: '114887766240'
        });
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ loggedIn: true });
          } else {
            this.setState({ loggedIn: false });
          }
        });
}
renderContain() {
  switch (this.state.loggedIn) {
    case true:
      return <Button> Log Out</Button>;
    case false:
    return <LoginForm />;
  
    default:
     return <Spinner size="large" />;
  }
  }


  render() {
    return (
      <View >
        <Header HeaderText='Firebase Login' />
        <View style={{ position: 'absolute', top: 100, left: 0, right: 0, bottom: 30, justifyContent: 'center', alignItems: 'center' }}>
      {this.renderContain()}
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
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
