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
        var {destinationsList,userId} = this.props.navigation.state.params;
        destinationsList.forEach((destination)=>{
            this.registerAtServer(destination,userId)
        })
        this.setState({destinationsList: destinationsList})
    }

    removeDestination = (destinationId, userId)=>{
        var newDestinations = this.state.destinationsList.filter((destination)=>{if(destination.id !== destinationId){
            return true;
        }})
        this.removeRegisterAtServer(destinationId, userId);
        this.setState({destinationsList:newDestinations})
    }

    createSingleWaitingDestination(destinationData){
        var {userId} = this.props.navigation.state.params;
        return <SingleWaitingDestination destinationData={destinationData}
                                         removeDestination={this.removeDestination}
                                         userId={userId}/>
    }

    registerAtServer(destination,userId){
        var url = 'http://weride.azurewebsites.net/api/queues/Queue?userId='+userId+'&destinationId='+destination.id;
        fetch(url, {
            method: 'POST'
        })
            .then((response) => {return response})
            .catch((err) => {
                console.log(err);
            });
    }

    removeRegisterAtServer(destinationId,userId){
        var url = 'http://weride.azurewebsites.net/api/queues/Unsubscribe?userId='+userId+'&destinationId='+destinationId;
        fetch(url, {
            method: 'DELETE'
        })
            .then((response) => {return response})
            .catch((err) => {
                console.log(err);
            });

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