import React,{Component} from 'react';
import {Text} from 'react-native'

class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { state } = this.props.navigation;
        return (
            <Text>{state.params.name}</Text>
        );
    }
}

export default ProfileScreen;