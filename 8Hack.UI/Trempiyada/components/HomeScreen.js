import React,{Component} from 'react';
import {View, Text} from 'react-native';
import FavoritesDestinationsContainer from '../containers/FavoritesDestinationsContainer'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'היי נדב',
  };
  render() {
      const {navigation} = this.props;
    return (
        <View>
            <FavoritesDestinationsContainer navigation={navigation}/>
        </View>
    );
  }
}

export default HomeScreen;
