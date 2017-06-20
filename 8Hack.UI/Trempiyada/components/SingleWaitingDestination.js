import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native'
import { Button, Content, ListItem, Text, Icon } from 'native-base';



export default class SingleWaitingDestination extends Component {
    constructor(props) {
        super(props);
        this.state = {placeInQueue : 0}
    }

    componentDidMount = () =>{
        const {destinationData, userId} = this.props;
        this.getWaitingCounterForDestination(destinationData.id,userId,(place)=>{
            this.setState({placeInQueue:place});
        })
    }

    componentWillReceiveProps = (nextProps) => {
        const {destinationData, userId} = nextProps;
        this.getWaitingCounterForDestination(destinationData.id,userId,(place)=>{
            this.setState({placeInQueue:place});
        })
    }

    getWaitingCounterForDestination = (destinationId,userId, callback) => {
        var url = 'http://weride.azurewebsites.net/api/queues/Queue?destinationId='+destinationId+'&userId='+userId;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => callback(responseJson))
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const {destinationData,removeDestination, userId} = this.props;
        var placeInQueue = this.state.placeInQueue;
        return (

                <Content>
                    <ListItem >
                        <View style={styles.container}>
                        <Text>{destinationData.name}</Text>
                            <Text>מיקומך בתור: {placeInQueue}</Text>
                        <Button transparent primary
                                onPress={()=>removeDestination(destinationData.id, userId)}>
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