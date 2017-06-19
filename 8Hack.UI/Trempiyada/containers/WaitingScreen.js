import React,{Component} from 'react';
import {Text, ListView} from 'react-native'
import SingleWaitingDestination from '../components/SingleWaitingDestination'

export default class WaitingScreen extends Component {
    constructor(props){
        super(props);
        this.state = {destinationsList:[]}
    }

    static navigationOptions = {
        title: 'ממתין לטרמפ...',
    };

    componentDidMount = () =>{
        this.setState({destinationsList: this.props.navigation.state.params.destinationsList})
    }
    
    removeDestination = (destinationId)=>{
        var newDestinations = this.state.destinationsList.filter((destination)=>{if(destination.id !== destinationId){
            return true;
        }})
        this.setState({destinationsList:newDestinations})
    }
    createSingleWaitingDestination(destinationData){
        return <SingleWaitingDestination destinationData={destinationData}
                                         removeDestination={this.removeDestination}/>
    }

    render() {
        const {destinationsList} = this.state;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(destinationsList)
        return (
            <ListView
                enableEmptySections={true}
                dataSource={dataSource}
                renderRow={(destinationData) => this.createSingleWaitingDestination(destinationData)}
            />

        );
    }
}