import React, {Component} from 'react';
import { FlatList , View } from 'react-native';
import WaitingQueueItem from "../components/WaitingQueueItem";
import {getWaitingQueue} from '../DestinationFetcher';

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
        });
    }

    deleteFromQueue = (userName, reason)=>{
        console.log('removing ' + userName + ' because : ' + reason);
        var newQueue = this.state.queue;
        newQueue = newQueue.filter((x)=>{
            return x.name != userName;
        });
        this.setState({queue: newQueue});
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.queue}
                    renderItem={({item}) => <WaitingQueueItem name={item} deleteFromQueue={this.deleteFromQueue}/>}
            />
            </View>
        );
    }
}