import React from 'react';

import 
{ TextInput, View, Text } from 'react-native';
const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => {
    const { inputStyle, labaelStyle, containerStyle } = styles;
            
           return (<View style={containerStyle}>
                <Text style={labaelStyle}>
                    { label }
                </Text>
                <TextInput 
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                // style={{ height: 40, width: 400, borderColor: 'gray', borderWidth: 1 }}
                />
                </View>
                );
};
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labaelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }

};

export { Input };
