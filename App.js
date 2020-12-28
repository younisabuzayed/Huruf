/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { RootNavigation } from './src/screens';
import SplashScreen  from 'react-native-splash-screen';

const App = () => {
  React.useEffect(()=>
  {
    SplashScreen.hide();
  })
  return (
    <RootNavigation />
  );
};

export default App;
