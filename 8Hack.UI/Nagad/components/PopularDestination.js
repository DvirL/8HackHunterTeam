import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default class PopularDestination extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {destination, nav} = this.props;

        console.log(destination);

        return (
            <View style={styles.item}>
                <Button style={styles.buttons} onPress={()=>this.navigateToDestinationQueue(nav,destination)}
                        title={ destination.name } />
            </View>
        );
    }

     navigateToDestinationQueue(nav, destination){
         nav('DestinationQueueScreen', { destination: destination });
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