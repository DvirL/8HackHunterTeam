import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default class PopularDestination extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {destinationName, nav} = this.props;
        return (
            <View style={styles.item}>
                <Button style={styles.buttons} onPress={()=>this.navigateToDestinationQueue(nav,destinationName)} title={ destinationName } />
            </View>
        );
    }

     navigateToDestinationQueue(nav, destinationName){
         nav('DestinationQueueScreen', { destinationName: destinationName });
    }
}
const styles = StyleSheet.create({
    item: {
        padding: 6
    },
    buttons : {
        height: 70
    }
});