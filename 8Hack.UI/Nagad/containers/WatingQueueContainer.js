import React, {Component} from 'react';
import { FlatList , View } from 'react-native';
import WaitingQueueItem from "../components/WaitingQueueItem";

export default class WatingQueueContainer extends Component {
    constructor(props) {
        super(props);
        const {destinationName} = this.props;

        var waitingQueue = this.getWaitingQueue(destinationName);

        this.state = {queue: waitingQueue};
    }

    getWaitingQueue(destinationName){
        console.log('fetching queue');
        return [
            {name:'Dvir'},
            {name:'Nadav'}
        ];
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
                    renderItem={({item}) => <WaitingQueueItem name={item.name} deleteFromQueue={this.deleteFromQueue}/>}
            />
            </View>
        );
    }
}