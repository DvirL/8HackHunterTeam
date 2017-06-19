import React,{Component} from 'react';
import { Container, Content, Button } from 'native-base';
import {View, ListView, StyleSheet, ScrollView} from 'react-native'
import {Text, ListItem, Fab, Icon} from 'native-base'
import FavoriteDestination from '../components/FavoriteDestination'

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

    addToFavorites(favoriteData){
        var favorites = this.state.favorites;
        var ds = this.state.dataSource;
        var newFavorties = favorites.concat({name: "חדש", destinationsList: favoriteData});
        this.setState({
            newFavorties,
            dataSource: ds.cloneWithRows(newFavorties)
        })
    }

    createSingleDestination(destinationData, navigation){
        return (
            <FavoriteDestination destinationData = {destinationData}
                                 navigation={navigation }/>
        )
    }

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <View>
                    <Text> אני רוצה לנסוע ל</Text>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.createSingleDestination(rowData, navigation)}
                    />
                </View>
                <View>
                    <Fab
                        containerStyle={{ marginLeft: 10 }}
                        style={{ backgroundColor: 'red' }}
                        position="topLeft"
                        onPress={() => navigation.navigate('SearchScreen',{addToFavorites: this.addToFavorites})}>
                        <Icon name="add" />
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