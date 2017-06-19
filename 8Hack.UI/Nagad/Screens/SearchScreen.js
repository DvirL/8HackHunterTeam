import React, {Component} from 'react';
import SearchComponent from "../components/SearchComponent";
import PopularDestination from "../components/PopularDestination";
import getDestinations from '../DestinationFetcher';


export default class SearchScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'חפש יעדים - תמצא מלוכה'
    });

    renderSingleDestination(nav){
        return ({item}) => <PopularDestination destinationName={item.key} nav={nav}/>;
    }

    itemSearchPredicate(item, text){
        console.log('Predicate against : ' + item + ' and ' + text +' returned : ' + (item.key.indexOf(text) !== -1))
        return item.key.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SearchComponent fetchAll={getDestinations} predicate={this.itemSearchPredicate} renderItem={this.renderSingleDestination(navigate)}/>
        );
    }
}