import React, { Component } from 'react';

import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
    state={
        email: '',
        password:''
    };
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
         
         <CardSection >
                <Button>
                    Log In 
                </Button>
            </CardSection>
     </Card>

        
      );
  }  
}


export default LoginForm;
