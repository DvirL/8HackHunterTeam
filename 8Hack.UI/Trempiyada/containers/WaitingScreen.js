import React,{Component} from 'react';
import {Text, ListView} from 'react-native'
import SingleWaitingDestination from '../components/SingleWaitingDestination'

export default class WaitingScreen extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    static navigationOptions = {
        title: 'ממתין לטרמפ...',
    };

    createSingleWaitingDestination(destinationData){
        return <SingleWaitingDestination destinationData={destinationData}/>
    }

    render() {
        const {destinationsList} = this.props.navigation.state.params;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(destinationsList)
        return (
            <ListView
                dataSource={dataSource}
                renderRow={(destinationData) => this.createSingleWaitingDestination(destinationData)}
            />

        );
    }
}