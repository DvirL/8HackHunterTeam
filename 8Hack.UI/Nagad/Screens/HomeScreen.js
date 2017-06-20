import React, { Component } from 'react';
import PopularDestinationContainer from "../containers/PopularDestinationContainer";

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'אהלן יא נגד!'
    });

    render() {
            const { navigate } = this.props.navigation;
        return (
            <PopularDestinationContainer nav={navigate}/>
        );
    }
}