import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class WaitingQueueItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name} = this.props;
        return (
            <View>
                <Text>{name}</Text>
            </View>
        );
    }
}