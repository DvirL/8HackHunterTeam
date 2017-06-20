import React,{Component} from 'react';
import { Container, Content, Button } from 'native-base';
import {View, ListView, StyleSheet, ScrollView} from 'react-native'
import {Text, ListItem, Fab, Icon} from 'native-base'
import FavoriteDestination from '../components/FavoriteDestination'
import { NavigationActions } from 'react-navigation'


export default class FavoritesDestinationsContainer extends Component {
    constructor(props){
        super(props);
        this.fetchFavorites = this.fetchFavorites.bind(this);
        this.addToFavorites = this.addToFavorites.bind(this);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };

    }
    static navigationOptions = {
        title: 'היי נדב',
    };

    componentDidMount = ()=> {
        this.fetchFavorites();
    }

    fetchFavorites(){
        var favorites = [];
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(favorites),
            favorites,
        })
    }

    addToFavorites(favoriteData, favoriteName){
        var favorites = this.state.favorites;
        var ds = this.state.dataSource;
        var newFavorties = favorites.concat({name: favoriteName, destinationsList: favoriteData});
        this.setState({
            favorites: newFavorties,
            dataSource: ds.cloneWithRows(newFavorties)
        })
    }

    startRide = (checkedData) => {
        var {navigate} = this.props.navigation;
        var {userId} = this.props;
        this.setState({currentRide: checkedData});
        navigate('WaitingScreen', {destinationsList:checkedData,
            userId:userId});
    }

    createSingleDestination(destinationData, navigation){
        var {userId} = this.props;
        return (
            <FavoriteDestination destinationData = {destinationData}
                                 navigation={navigation}
                                 userId={userId}
                                 startRide={this.startRide}/>
        )
    }

    render() {
        const {navigation, userId} = this.props;
        const {currentRide} = this.state;
        return (
            <View>
                <View>
                    <Text> לאן תרצה לנסוע?</Text>
                    <ListView
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.createSingleDestination(rowData, navigation)}
                    />
                </View>
                <View>
                    <Fab
                        containerStyle={{ marginLeft: 10 }}
                        style={{ backgroundColor: 'red' }}
                        position="topLeft"
                        onPress={() => navigation.navigate('SearchScreen',{
                                addToFavorites: this.addToFavorites,
                                startRide: this.startRide,

                        })}>
                        <Icon name="add" />
                    </Fab>
                    <Fab
                        containerStyle={{ marginLeft: 10 }}
                        style={{ backgroundColor: 'blue' }}
                        position="topRight"
                        onPress={() => navigation.navigate('WaitingScreen',{userId: userId,destinationsList:currentRide})}>
                        <Icon name="car" />
                    </Fab>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});