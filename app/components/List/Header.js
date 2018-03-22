import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './styles';

const Header = () => (
    <View style={styles.header}>
        <LinearGradient 
            style={{flex:1, justifyContent: 'center', alignItems: 'center'}}
            colors={['rgba(228, 229, 241, 1)', 'rgba(255,255,255, 0)']}>
            <View style={{ height: 4, width: 32, backgroundColor: '#000', borderRadius: 2}} />
        </LinearGradient>
    </View>
);

export default Header;