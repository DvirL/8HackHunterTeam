import React,{Component} from 'react';
import {StyleSheet, View, Alert } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';

class FavoriteDestination extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        const {destinationData} = this.props;
        return (
            <View style={styles.container}>
                    <Button full onPress={()=>navigate('WaitingScreen', {destinationsList:destinationData.destinationsList})}>
                        <Text>
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
});