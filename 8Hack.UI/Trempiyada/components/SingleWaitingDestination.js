import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native'
import { Button, Content, ListItem, Text, Icon } from 'native-base';



export default class SingleWaitingDestination extends Component {
    constructor(props) {
        super(props);
    }

    getWaitingCounterForDestination(){
        return 4;
    }
    
    render() {
        const {destinationData} = this.props;
        return (

                <Content>
                    <ListItem >
                        <View style={styles.container}>
                        <Text>{destinationData.name}</Text>
                            <Text>מיקומך בתור: {this.getWaitingCounterForDestination()}</Text>
                        <Button transparent primary >
                            <Icon name='close' />
                        </Button>
                            </View>
                        </ListItem>
                    </Content>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});