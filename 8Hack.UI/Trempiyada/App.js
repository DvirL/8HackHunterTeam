import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Platform, StatusBar } from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

import HomeScreen from './components/HomeScreen'
import WaitingScreen from './containers/WaitingScreen'
import SearchScreen from './containers/SearchScreen'
import WelcomeScreen from './containers/WelcomeScreen'

const App =
    StackNavigator({
            WelcomeScreen: {screen: WelcomeScreen},
            HomeScreen: { screen: HomeScreen },
            WaitingScreen: { screen: WaitingScreen },
            SearchScreen: {screen: SearchScreen}
        },
        {
            cardStyle: {
                paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
            }
        });

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});
