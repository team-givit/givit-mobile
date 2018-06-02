import { View, Text, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to GiVit
            </Text>
            </View>
        );
    };
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
})