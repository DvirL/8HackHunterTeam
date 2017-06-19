import React from 'react';
import { StackNavigator } from 'react-navigation';
import DestinationQueueScreen from './Screens/DestinationQueueScreen';
import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./Screens/SearchScreen";
import { Platform, StatusBar } from 'react-native';

const App = StackNavigator({
    SearchScreen: { screen: SearchScreen, params:{} },
    Home: { screen: HomeScreen },
    DestinationQueueScreen: { screen: DestinationQueueScreen }
},{cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
}});
export default App;