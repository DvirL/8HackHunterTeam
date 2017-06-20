import React, {Component} from 'react';
import {Text, Header, Item, Input,Icon} from 'native-base'
import {View, FlatList, StyleSheet} from 'react-native'
import {getDestinations} from '../DestinationFetcher'

export default class SearchComponent extends Component {

    constructor(props) {
        super(props);

        var fullDataList = getDestinations(this.handleResponse);

        window.self = this;

        this.state = {
            fullList: [],
            filteredList : []};
    }

    handleResponse(response){
        var list = response.map(window.self.props.itemTransform);
        console.log(list);

        window.self.setState({
            fullList: list,
            filteredList : list});
    }

    textChanged(text){
        console.log('Text changed : ' + text)
        var filteredData = this.state.fullList.filter((item) => this.props.predicate(item,text));

        this.setState({filteredList:filteredData});
    }

    render() {
        return (
            <View style={styles.container}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="search" />
                        <Input placeholder="חפש יעד..."
                               onChangeText={(text)=>this.textChanged(text)}/>
                        <Icon name="car" />
                    </Item>
                </Header>
                <FlatList
                    data={this.state.filteredList}
                    renderItem = {this.props.renderItem}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingBottom: 60
    }
});