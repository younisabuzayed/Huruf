/**
 * @format
 */

import {AppRegistry, I18nManager} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
I18nManager.forceRTL(true);
import TrackPlayer from 'react-native-track-player';
import 'react-native-gesture-handler';

TrackPlayer.registerPlaybackService(()=> require('./service'));

AppRegistry.registerComponent(appName, () => App);
