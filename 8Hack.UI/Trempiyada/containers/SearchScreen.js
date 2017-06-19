import React, {Component} from 'react';
import {Text, Header, Item, Input,Icon} from 'native-base'
import {View, ListView, StyleSheet, Button} from 'react-native'
import SingleSearchDestination from '../components/SingleSearchDestination'
import PopupDialog from 'react-native-popup-dialog';


const data=[
    {
        name: "תל אביב",
        checked: false,
    },
    {
        name: "רמת גן",
        checked: false,
    },
    {
        name: "באר שבע",
        checked: false,
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

    onChecked(destinationData){
        var destinationIndex = data.findIndex((destination)=> {return destination.name === destinationData.name});
        data[destinationIndex].checked = true;
    }

    createSingleSearchDestination(destinationData){
        return <SingleSearchDestination destinationData={destinationData}
                                        onChecked={this.onChecked}/>
    }

    addToFavorites = () =>{
        var checkedData = data.filter((destination) => {
            return destination.checked;
        })
        this.props.navigation.state.params.addToFavorites(checkedData);
    }

    render() {
        const {dataSource} = this.state;
        var {startRide} = this.props.navigation.state.params;

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
                    dataSource={dataSource}
                    renderRow={(rowData) => this.createSingleSearchDestination(rowData)}
                />
                <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
                    <View>
                        <Text>הכנס שם למועדף:</Text>
                    </View>
                </PopupDialog>
                <View style={styles.buttonContainer}>
                    <Button title="הוסף למועדפים"
                            onPress={()=>this.popupDialog.show() }/>
                    <Button title="בקש טרמפ"
                            onPress={()=>startRide}/>

                </View>
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
    }
});

/**/