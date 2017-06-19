import React, { Component } from 'react';
import { Button } from 'react-native';
import PopularDestinationContainer from "../containers/PopularDestinationContainer";

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Welcom Nagad'
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <PopularDestinationContainer nav={navigate}/>
        );
    }
}