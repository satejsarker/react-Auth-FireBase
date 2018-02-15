/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import LoginForm from './src/components/LoginForm';

import firebase from 'firebase';
import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';

import { Header, Spinner, } from './src/components/common';


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
    
      renderContent() {
        switch (this.state.loggedIn) {
          case true:
            return (
              <Button 
              title="Log Out" onPress={() => firebase.auth().signOut()}
              color="#841584"
              >
                Log Out
              </Button>
            );
          case false:
            return <LoginForm />;
          default:
            return <Spinner size="large" />;
        }
      }
    
      render() {
        return (
          <View>
            <Header headerText="FireBase Login" />
            {this.renderContent()}
          </View>
        );
      }
    }
    
