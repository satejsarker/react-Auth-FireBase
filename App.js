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
  Text,
  View
} from 'react-native';
import { Header } from './src/components/common';


export default class App extends Component {
  componentWillMount() {
      firebase.initializeApp(
        {
          apiKey: 'AIzaSyA9DhfxU-niABJ_H6o1zTt7surbfodlIDw',
          authDomain: 'auth-46497.firebaseapp.com',
          databaseURL: 'https://auth-46497.firebaseio.com',
          projectId: 'auth-46497',
          storageBucket: 'auth-46497.appspot.com',
          messagingSenderId: '114887766240'
        }
      );
  }
  render() {
    return (
      <View >
        <Header HeaderText='Firebase Login ' />
        <LoginForm />
        <Text style={styles.welcome}>
          Welcome to Firebase Login
        </Text>
      
      </View>
    );
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
