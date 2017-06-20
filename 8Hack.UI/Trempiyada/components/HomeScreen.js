import React,{Component} from 'react';
import {View, Text} from 'react-native';
import FavoritesDestinationsContainer from '../containers/FavoritesDestinationsContainer'

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `היי ${navigation.state.params.name}`,
        fontSize: 18,
        backgroundColor: '#ccc',
    })
  render() {
      const {navigation} = this.props;
      const {userId} = this.props.navigation.state.params;
      console.log('user id is '+ userId)
    return (
        <View>
            <FavoritesDestinationsContainer navigation={navigation}
                                            userId = {userId}/>
        </View>
    );
  }
}

export default HomeScreen;
