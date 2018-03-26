import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, SafeAreaView } from 'react-native';

import { ListItem } from '../components/List';
import currencies from '../data/currencies';

import CloseBar from '../components/List/CloseBar';

const TEMP_CURRENT_CURRENCY = 'EUR';

class CurrencyList extends Component {
    static propTypes = {
		navigation: PropTypes.object,
	};
    handlePress = () => {
        const { type } = this.props.navigation.state.params;
        if (type === 'input') {

        } else if (type === 'return') {
            
        }
        this.props.navigation.goBack(null);
    };
    handleClose = () => {
        this.props.navigation.goBack(null);
    };

    render() {
        return (
            <SafeAreaView style={{ flex:1, backgroundColor:"#FFF" }}>
                <FlatList
                    data={currencies}
                    ListHeaderComponent={ <View style={{ flex:1, height: 80 }} /> }
                    ListFooterComponent={ <View style={{ flex:1, height: 80 }} /> }
                    renderItem={({ item }) => (
                        <ListItem
                        shortLabel={item.short}
                        fullLabel={item.full}
                        selected={item.short === TEMP_CURRENT_CURRENCY}
                        onPress={this.handlePress}
                        />
                    )}
                    keyExtractor={item => item.short}
                />
                <CloseBar onPress={this.handleClose} ></CloseBar>
            </SafeAreaView>
        );
    }
}

export default CurrencyList;