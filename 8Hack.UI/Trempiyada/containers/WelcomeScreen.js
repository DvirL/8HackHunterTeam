import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {Input, Item} from 'native-base'

export default class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            id:''
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

    render() {
        return (
            <View>
                <Text>הכנס את שמך</Text>
                <Item>
                    <Input placeholder="שם מלא"
                           onChangeText={(text)=>{this.nameChanged(text)}}/>
                </Item>
                <Button title="הירשם"
                        onPress={()=>this.signup()}/>
            </View>
        )
    }
}