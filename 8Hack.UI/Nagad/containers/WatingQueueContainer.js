import React, {Component} from 'react';
import { FlatList , View, Text, StyleSheet } from 'react-native';
import WaitingQueueItem from "../components/WaitingQueueItem";
import {getWaitingQueue, removeFromWaitingQueue} from '../DestinationFetcher';

export default class WatingQueueContainer extends Component {
    constructor(props) {
        super(props);
        const {destinationId} = this.props;

        this.state = {queue: [], loading: true};

        this.getWaitingQueueFromServer(destinationId);
    }

    getWaitingQueueFromServer(destinationId){
        console.log('fetching queue ' + destinationId);

        var thisSelf = this;

        getWaitingQueue(destinationId, (waitingList)=>
        {
            console.log('got from server : ' + waitingList);
            waitingList = waitingList.map(w=> {return {key:w.id, name:w.name};});
            thisSelf.setState({queue: waitingList, loading:false});
        });
    }

    deleteFromQueue = (userId, reason)=>{
        console.log('removing ' + userId + ' because : ' + reason);
        var newQueue = this.state.queue;
        newQueue = newQueue.filter((x)=>{
            return x.key != userId;
        });
        this.setState({queue: newQueue});

        removeFromWaitingQueue(userId, (response)=>{
            console.log('got response from server for deleting : ' + response.status);
        });
    }

    render() {
        const {queue, loading} = this.state;
        if(loading){
            return(
                <View style={styles.textContainer}>
                    <Text style={styles.text}>טוען...</Text>
                </View>
            );
        }
        if (queue.length == 0){
            return(
                <View style={styles.textContainer}>
                    <Text style={styles.text}>אין אף אחד שממתין בתור :)</Text>
                </View>
            );
        }
        else{
            return (
                <View>
                    <FlatList
                        data={this.state.queue}
                        renderItem={({item}) => <WaitingQueueItem item={item} deleteFromQueue={this.deleteFromQueue}/>}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 6
    }
});