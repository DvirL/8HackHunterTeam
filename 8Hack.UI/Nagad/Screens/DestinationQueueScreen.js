import React, { Component } from 'react';
import { View, Text  } from 'react-native';
import WatingQueueContainer from "../containers/WatingQueueContainer";


export default class DestinationQueueScreen extends Component {

    constructor(props){
        super(props);

    }

    static navigationOptions = ({ navigation }) => ({
        title: 'תור ל' + navigation.state.params.destinationName
    });

    render() {
        return (
            <View>
                <WatingQueueContainer/>
            </View>
        );
    }
};