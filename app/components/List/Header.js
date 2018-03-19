import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './styles';

const Header = () => (
    <View style={styles.header}>
        <LinearGradient 
            style={{flex:1, justifyContent: 'center', alignItems: 'center'}}
            colors={['rgba(0,0,0, 1)', 'rgba(0,0,0, 0)']}>
            <View style={{ height: 4, width: 32, backgroundColor: '#555', borderRadius: 2}} />
        </LinearGradient>
    </View>
);

export default Header;