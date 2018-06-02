import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class LoadingScreen extends React.Component {

    
    render() {
        Navigation.showModal({
            screen: 'LoginScreen', // unique ID registered with Navigation.registerScreen
            title: 'giVit', // title of the screen as appears in the nav bar (optional)
            navigatorStyle: {
                'navBarHidden': true,
          }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
          });

        return null;

    }
}
