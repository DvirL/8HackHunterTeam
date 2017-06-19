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
        return [
            {name:'Dvir'},
            {name:'Nadav'}
        ];
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.queue}
                    renderItem={({item}) => <WaitingQueueItem name={item.name}/>}
            />
            </View>
        );
    }
}