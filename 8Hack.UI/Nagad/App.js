import React from 'react';
import { StackNavigator } from 'react-navigation';
import DestinationQueueScreen from './Screens/DestinationQueueScreen';
import HomeScreen from "./Screens/HomeScreen";

const App = StackNavigator({
    Home: { screen: HomeScreen },
    DestinationQueueScreen: { screen: DestinationQueueScreen },
});
export default App;