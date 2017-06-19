import React, { Component } from 'react';
import { View, Text  } from 'react-native';
import WatingQueueContainer from "../containers/WatingQueueContainer";


export default class DestinationQueueScreen extends Component {

    constructor(props){
        super(props);

    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Queue to ' + navigation.state.params.destinationName
    });

    render() {
        const {destinationName} = this.props.navigation.state.params;
        return (
            <View>
                <WatingQueueContainer/>
            </View>
        );
    }
};