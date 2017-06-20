import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, ScrollView} from 'react-native';
import {Input, Item} from 'native-base'

export default class WelcomeScreen extends Component {

    static navigationOptions = {
        title:'WeRide',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    };

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            id:'',
            buttonMargin: 20
        }
    }

    nameChanged = (text) =>{
        this.setState({name:text})
    }

    signup = () => {
        this.registerAtServer(this.state.name, (response)=>{
            var userId = response.UserDetails.id;
            const {navigate} = this.props.navigation;
            navigate('HomeScreen', {
                name: this.state.name,
                userId: userId
            })
            /*try {
             AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
             } catch (error) {
             console.log('error')
             }*/
        });
    }

    registerAtServer = (name, callback) => {
        var url = 'http://weride.azurewebsites.net/api/users/Register?name='+name;
        fetch(url, {
            method: 'POST',
        })
            .then((response) => response.json())
            .then((responseJson)=> {
                callback(responseJson);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    onFocus = () =>
    {
        this.setState({margin:250})
    }

    onSubmitEditing = () =>{
        this.signup();
    }

    render() {
        var buttonHeight = {
            width:150,
            height:80,
            alignSelf:'center',
            marginBottom: this.state.margin,
        }
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.textStyle}>הכנס את שמך</Text>
                    <Item>
                        <Input placeholder="שם מלא"
                               returnKeyType="go"
                               onChangeText={(text)=>{this.nameChanged(text)}}
                                onFocus={()=>this.onFocus()}
                               onSubmitEditing={()=>this.onSubmitEditing()}/>
                    </Item>
                </View>
                <View style={buttonHeight}>
                    <ScrollView ref='scrollView'>
                        <Button title="הירשם"
                                onPress={()=>this.signup()}/>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textStyle:{
        fontSize: 30,
        textAlign:'center'
    },
    headerContainer:{
        flex:1,
        justifyContent:'flex-start',
        paddingTop:20
    },
    button:{
        width:150,
        height:80,
        alignSelf:'center',
        marginBottom: 250

    }
});