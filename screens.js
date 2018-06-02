import { Navigation } from 'react-native-navigation';

import LoadingScreen from './views/LoadingScreen'
import LoginScreen from './views/LoginScreen'

export function registerScreens() {
    Navigation.registerComponent('LoadingScreen', () => LoadingScreen);
    Navigation.registerComponent('LoginScreen', () => LoginScreen);
} 