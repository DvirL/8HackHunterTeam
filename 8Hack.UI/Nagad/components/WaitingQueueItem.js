import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class WaitingQueueItem extends Component {
    constructor(props) {
        super(props);

        this.state = {active: true}
    }

    render() {
        var swipeOptions = [
            {
                text:'עלה',
                backgroundColor:'#3cbc76',
                onPress : () => {this.props.deleteFromQueue(this.props.item.key, 'Got On')}
            },
            {
                text:'לא בא',
                backgroundColor:'#d31f0e',
                onPress : () => {this.props.deleteFromQueue(this.props.item.key, 'No Show')}
            }];

        const {item} = this.props;
        return (
            <View style={styles.viewContainer}>
                <Swipeout style={styles.container} right={swipeOptions} close={this.state.active}>
                    <View>
                        <Text style={styles.buttons}>{item.name}</Text>
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