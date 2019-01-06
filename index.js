/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyFlatList from './app/components/MyFlatList';

// AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => MyFlatList);
