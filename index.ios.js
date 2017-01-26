// Index.ios.js - place code in here for iOS!!!!

// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
  </View>
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
