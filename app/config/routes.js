import React from 'react';
import { StackNavigator} from 'react-navigation';

import Home from '../screens/Home';
import Header from '../components/List/Header';
import CurrencyList from '../screens/CurrencyList';

export default StackNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: {
            header: () => <Header />
        },
    },
}, {
    mode: 'modal'
});