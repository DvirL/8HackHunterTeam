import React, {Component} from 'react';
import { FlatList , View } from 'react-native';
import WaitingQueueItem from "../components/WaitingQueueItem";
import {getWaitingQueue, removeFromWaitingQueue} from '../DestinationFetcher';

export default class WatingQueueContainer extends Component {
    constructor(props) {
        super(props);
        const {destinationId} = this.props;

        this.state = {queue: []};

        this.getWaitingQueueFromServer(destinationId);
    }

    getWaitingQueueFromServer(destinationId){
        console.log('fetching queue ' + destinationId);

        var thisSelf = this;

        getWaitingQueue(destinationId, (waitingList)=>
        {
            console.log('got from server : ' + waitingList);
            waitingList = waitingList.map(w=> {return {key:w.id, name:w.name};});
            thisSelf.setState({queue: waitingList});
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