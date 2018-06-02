import { Navigation } from 'react-native-navigation';

export function registerNavigation() {
    Navigation.startSingleScreenApp({
        screen: {
          screen: 'LoadingScreen', // unique ID registered with Navigation.registerScreen
          title: 'clARity', // title of the screen as appears in the nav bar (optional)
          navigatorStyle: {
              'navBarHidden': true,
        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
          navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        },
    });
};