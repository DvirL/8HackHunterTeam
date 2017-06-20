import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'native-base';

export default class PopularDestination extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {destination, nav} = this.props;

        return (
            <View style={styles.item}>
                    <Button style={baseStyles.buttons} full onPress={()=>this.navigateToDestinationQueue(nav,destination)}>
                        <Text style={styles.text}>{ destination.name }</Text>
                    </Button>
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
    text : {
        color: '#FFFFFF'
    }
});

const baseStyles = {
    buttons:{
        borderRadius: 6
    }
};