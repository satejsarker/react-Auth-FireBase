import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    state={
        email: '',
        password: '',
        error: '',
        loading: false
    };
    onButtonPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this)) 
                .catch(() => {
                    this.onLoginFail.bind(this);
                });
            });
    }
    onLoginFail() {
        this.setState({ error: 'Authentication Faild.',
    loading: false,

 }); 
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '' 
        });
    }
        renderButton() {
            if (this.state.loading) {
                return <Spinner size='small' />;
            }
            return (
                <Button onPress={this.onButtonPress.bind(this)} >
                    Log In
                </Button>
            );
        }

  render() {
      return (
     <Card>
         <CardSection >
             <Input
             
             label='Email'
             placeholder="User@email.com"
             value={this.state.email}
             onChangeText={text => this.setState({ email: text })}
             />

             </CardSection>
             <CardSection >
                 <Input
                 secureTextEntry
                    placeholder='password'
                    label="password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                 />
                 </CardSection>
         <Text style={styles.errorTextStyle} >
            {this.state.error}
         </Text>
         <CardSection >
              {this.renderButton()}
            </CardSection>
     </Card>

        
      );
  }  
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
