import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './components/HomeScreen'
import WaitingScreen from './containers/WaitingScreen'
import SearchScreen from './containers/SearchScreen'

const App = StackNavigator({
      Home: { screen: HomeScreen },
      WaitingScreen: { screen: WaitingScreen },
      SearchScreen: {screen: SearchScreen}
});

export default App;

/*export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>laufer</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
