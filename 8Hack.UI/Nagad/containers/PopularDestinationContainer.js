import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Container, Content, Button, Icon, Fab } from 'native-base';
import PopularDestination from "../components/PopularDestination";
import getDestinations from '../DestinationFetcher';

export default class PopularDestinationContainer extends Component {

    constructor(props){
        super(props);

        var allDestinations = getDestinations();

        var topFive = allDestinations.slice(0,5).sort((a,b) => {return a.key.localeCompare(b.key);});

        this.state = { destinations: topFive };
    }

    renderSingleDestination(nav){
        return ({item}) => <PopularDestination destinationName={item.key} nav={nav}/>;
    }

    render() {
        const {nav} = this.props;
        return (
            <Container style={styles.buttonContainer}>
                <Content>
                    <FlatList
                        data={this.state.destinations}
                        renderItem={this.renderSingleDestination(nav)}/>
                </Content>
                <Fab onPress={() => nav('SearchScreen')} >
                    <Icon name="search"/>
                </Fab>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 6
    },
    buttonsContainer:{
        flex: 1,
        marginTop: 10,
        marginRight: 50
    }
});