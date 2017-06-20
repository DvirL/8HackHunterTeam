import React,{Component} from 'react';
import {Text, ListView, View} from 'react-native'
import SingleWaitingDestination from '../components/SingleWaitingDestination'
import {HeaderBackButton} from 'react-navigation'

export default class WaitingScreen extends Component {
    constructor(props){
        super(props);
        this.state = {destinationsList:[]}
    }

    static navigationOptions = ({ navigation }) => ({
        title:'ממתין לטרמפ...',
        
    });

    componentDidMount = () =>{
        var {destinationsList,userId} = this.props.navigation.state.params;
        if(destinationsList) {
            destinationsList.forEach((destination)=> {
                this.registerAtServer(destination, userId)
            })
            this.setState({destinationsList: destinationsList})
        }
    }

    removeDestination = (destinationId, userId)=>{
        var newDestinations = this.state.destinationsList.filter((destination)=>{if(destination.id !== destinationId){
            return true;
        }})
        this.removeRegisterAtServer(destinationId, userId);
        this.props.navigation.state.params.updateDestinations(newDestinations);
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

        if(destinationsList.length === 0){
            return (
                <View style={{flex:1,alignItems:'center'}}>
                    <Text style={{fontSize: 30, marginTop:30}}>אין לך כרגע נסיעה</Text>
                    <Text style={{fontSize: 20, marginTop:20}}>חזור למסך הבית כדי להתחיל נסיעה חדשה</Text>
                </View>
            )
        }
        else {
            return <ListView
                enableEmptySections={true}
                dataSource={dataSource}
                renderRow={(destinationData) => this.createSingleWaitingDestination(destinationData)}
            />
        }

    }
}