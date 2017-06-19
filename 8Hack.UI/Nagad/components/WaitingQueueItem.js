import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class WaitingQueueItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var swipeOptions = [
            {
                text:'Got on',
                backgroundColor:'#3cbc76',
                onPress : () => {this.props.deleteFromQueue(this.props.name, 'Got On')}
            },
            {
                text:'No show',
                backgroundColor:'#d31f0e',
                onPress : () => {this.props.deleteFromQueue(this.props.name, 'No Show')}
            }];

        const {name} = this.props;
        return (
            <View style={styles.viewContainer}>
                <Swipeout style={styles.container} right={swipeOptions}>
                    <View>
                        <Text style={styles.buttons}>{name}</Text>
                    </View>
                </Swipeout>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons : {
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
        textAlign: 'center'
    },
    viewContainer: {
        flex: 1,
    }
});