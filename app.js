import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { registerNavigation } from './navigation';

registerScreens();
registerNavigation();
