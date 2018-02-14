// import libraries for making a components
import React from 'react';
import { Text, View } from 'react-native';


//make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
return (<View style={viewStyle}>
    <Text style={textStyle}> {props.HeaderText} </Text>
    </View>
             );
};
const styles = {
    viewStyle: {
        backgroundColor: '#9AF18F',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20

    }
};

//make the component available to other parts of the app 
export { Header };

