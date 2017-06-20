import React,{Component} from 'react';
import {StyleSheet, View, Alert, Text } from 'react-native';
import { Container, Content,  Button } from 'native-base';

class FavoriteDestination extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        const {destinationData, userId, startRide} = this.props;

        return (
            <View style={styles.container}>
                <Button full onPress={()=>startRide(destinationData.destinationsList)}>
                    <Text style={styles.text}>
                        {destinationData.name}
                    </Text>
                </Button>
            </View>
        );
    }
}

export default FavoriteDestination;

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    text:{
        color: 'white'
    }
});

