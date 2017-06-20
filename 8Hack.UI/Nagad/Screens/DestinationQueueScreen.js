import React, { Component } from 'react';
import { View, Text  } from 'react-native';
import WatingQueueContainer from "../containers/WatingQueueContainer";


export default class DestinationQueueScreen extends Component {

    constructor(props){
        super(props);

    }

    static navigationOptions = ({ navigation }) => ({
        title: 'תור ל' + navigation.state.params.destination.name
    });

    render() {
        return (
            <View>
                <WatingQueueContainer destinationId={this.props.navigation.state.params.destination.key}/>
            </View>
        );
    }
};