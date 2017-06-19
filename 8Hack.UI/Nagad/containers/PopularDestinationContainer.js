import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PopularDestination from "../components/PopularDestination";


export default class PopularDestinationContainer extends Component {

    render() {
        const {nav} = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Tel aviv'},
                        {key: 'Ramat Gan'},
                        {key: 'Ramat Hasharon'}
                    ]}
                    renderItem={({item}) => <PopularDestination destinationName={item.key} nav={nav}/>}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 6
    }
});