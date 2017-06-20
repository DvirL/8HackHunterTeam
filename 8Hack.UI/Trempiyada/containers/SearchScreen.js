import React, {Component} from 'react';
import { Header, Item, Input,Icon} from 'native-base'
import {Text, View, ListView, StyleSheet, Button, TextInput} from 'react-native'
import SingleSearchDestination from '../components/SingleSearchDestination'
import PopupDialog, {DialogButton} from 'react-native-popup-dialog';
import { NavigationActions } from 'react-navigation'


export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.textChanged = this.textChanged.bind(this);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows([])
        this.state = {
            text: "hello",
            dataSource : dataSource,
            rawData: [],
            initialData: [],
            currentTextLength: 0,
        };

    }

    static navigationOptions = ({ navigation }) => ({
        title:'בחר יעד/ים',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center',marginRight:40}
    });

    componentDidMount = ()=>{
         this.fetchFromServer()
    }

    fetchAllDestination = (data) => {
        var ds = this.state.dataSource;
        var dataSource = ds.cloneWithRows(data)
        this.setState({
            rawData: data,
            initialData: data,
            dataSource,
        })
    }

    fetchFromServer(){
        var url = 'http://weride.azurewebsites.net/api/queues/all';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson)=> {
                this.fetchAllDestination(responseJson);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    textChanged(text){
        if(text.length < this.state.currentTextLength){
            var oldData = this.state.initialData;
        }else{
            var oldData = this.state.rawData;
        }
        var newData = oldData.filter((destination)=>{
            if(destination.name.indexOf(text) !== -1){
                return true;
            }
        })
        const dataSource = this.state.dataSource.cloneWithRows(newData);
        this.setState({
            rawData:newData,
            dataSource,
            currentTextLength: text.length
        })
    }

    favoriteNameChanged = (text)=>{
        this.setState({favoriteName: text})
    }

    onChecked = (destinationData) => {
        var data = this.state.initialData;
        var destinationIndex = data.findIndex((destination)=> {return destination.name === destinationData.name});
        data[destinationIndex].checked = true;
    }

    createSingleSearchDestination(destinationData){
        console.log('got here')
        return <SingleSearchDestination destinationData={destinationData}
                                        onChecked={this.onChecked}
                                        checked={destinationData.checked}/>
    }

    addToFavorites = () =>{
        var checkedData = this.extractSelectedValuesAndDisable()
        var favoriteName = this.state.favoriteName;
        this.props.navigation.state.params.addToFavorites(checkedData, favoriteName);
        const backAction = NavigationActions.back();
        this.props.navigation.dispatch(backAction)
    }

    startRide = () => {
        var checkedData = this.extractSelectedValuesAndDisable()
        this.props.navigation.state.params.startRide(checkedData);
    }

    extractSelectedValuesAndDisable = () =>{
        var data = this.state.initialData;
        var checkedData = data.filter((destination) => {
            return destination.checked;
        });
        data.forEach((destination)=>{destination.checked=false;})
        return checkedData;
    }

    render() {
        const {dataSource} = this.state;
        return (
            <View style={styles.container}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="search" />
                        <Input placeholder="חפש יעד"
                               onChangeText={(text)=>this.textChanged(text)}/>
                        <Icon name="car" />
                    </Item>
                </Header>
                <ListView
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={(rowData) => this.createSingleSearchDestination(rowData)}
                />

                <View style={styles.buttonContainer}>
                    <Button title="הוסף למועדפים"
                            onPress={()=>this.popupDialog.show() }/>
                    <Button title="בקש טרמפ"
                            onPress={()=>this.startRide()}/>
                </View>

                    <PopupDialog dialogStyle={{marginTop:-300}}
                        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                        height={150}
                        actions={[
                             <DialogButton
                                buttonStyle={{paddingTop: 10}}
                                textContainerStyle={{backgroundColor:'#2fe5f9',height:50}}
                                text="הוסף"
                                onPress={() => {this.addToFavorites();}}
                                key="dvir"/>,
                             ]}>
                        <View>
                            <Text style={styles.popupModal}>הכנס שם למועדף:</Text>
                            <Item>
                                <Input placeholder="הכנס שם המועדף (בית, עבודה,...)"
                                       onChangeText={(text)=>this.favoriteNameChanged(text)}/>
                            </Item>
                        </View>
                    </PopupDialog>
                </View>

        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    popupModal :{
        textAlign: 'center',
        fontSize: 20
    },

});

/*[
 {
 name: "תל אביב",
 checked: false,
 id:1234
 },
 {
 name: "רמת גן",
 checked: false,
 id: 456
 },
 {
 name: "באר שבע",
 checked: false,
 id:8
 },
 ];*/