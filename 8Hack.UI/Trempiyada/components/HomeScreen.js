import React,{Component} from 'react';
import {View, Text} from 'react-native';
import FavoritesDestinationsContainer from '../containers/FavoritesDestinationsContainer'

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `היי ${navigation.state.params.name}`,
        headerTitleStyle :{textAlign: 'center',alignSelf:'center',marginRight:40},
    })
  render() {
      const {navigation} = this.props;
      const {userId} = this.props.navigation.state.params;
    return (
        <View>
            <FavoritesDestinationsContainer navigation={navigation}
                                            userId = {userId}/>
        </View>
    );
  }
}

export default HomeScreen;
