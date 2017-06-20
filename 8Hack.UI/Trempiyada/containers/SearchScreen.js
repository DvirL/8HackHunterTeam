import React, {Component} from 'react';
import { Header, Item, Input,Icon} from 'native-base'
import {Text, View, ListView, StyleSheet, Button, TextInput} from 'react-native'
import SingleSearchDestination from '../components/SingleSearchDestination'
import PopupDialog, {DialogButton} from 'react-native-popup-dialog';


const data=[
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
]

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.textChanged = this.textChanged.bind(this)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(data)
        this.state = {
            text: "hello",
            dataSource : dataSource,
            rowData: data,
            initalData: data,
            currentTextLength: 0,
        };

    }

    textChanged(text){
        if(text.length < this.state.currentTextLength){
            var oldData = this.state.initalData;
        }else{
            var oldData = this.state.rowData;
        }
        var newData = oldData.filter((destination)=>{
            if(destination.name.indexOf(text) !== -1){
                return true;
            }
        })
        const dataSource = this.state.dataSource.cloneWithRows(newData);
        this.setState({
            rowData:newData,
            dataSource,
            currentTextLength: text.length
        })
    }

    favoriteNameChanged = (text)=>{
        this.setState({favoriteName: text})
    }

    onChecked(destinationData){
        var destinationIndex = data.findIndex((destination)=> {return destination.name === destinationData.name});
        data[destinationIndex].checked = true;
    }

    createSingleSearchDestination(destinationData){
        return <SingleSearchDestination destinationData={destinationData}
                                        onChecked={this.onChecked}/>
    }

    addToFavorites = () =>{
        var checkedData = this.extractSelectedValuesAndDisable()
        var favoriteName = this.state.favoriteName;
        this.props.navigation.state.params.addToFavorites(checkedData, favoriteName);
    }

    startRide = () => {
        var checkedData = this.extractSelectedValuesAndDisable()
        this.props.navigation.state.params.startRide(checkedData);
    }

    extractSelectedValuesAndDisable = () =>{
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

                    <PopupDialog style={styles.modal}
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
        justifyContent: 'center'
    },
    popupModal :{
        textAlign: 'center',
        fontSize: 20
    },
    modal:{
      marginBottom:30
    },
});

/**/