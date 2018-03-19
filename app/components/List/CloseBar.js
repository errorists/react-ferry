import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './styles';

const TINT_COLOR = '#FF9500';

const CloseBar = ({onPress}) => (
    <View style={styles.closeBar}>
        <LinearGradient 
            style={{flex:1, alignItems: 'center' }}
            colors={['rgba(0,0,0, 0)', 'rgba(0,0,0, 1)']}>
            <TouchableOpacity
                onPress={onPress} 
                style={{ 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: 48,
                    width: 48, 
                    backgroundColor: TINT_COLOR,
                    borderRadius: 24,
                }}
            >
                <Image resizeMode='contain' style={styles.closeIcon} source={require('./images/closeIcon.png')}></Image>
            </TouchableOpacity>
        </LinearGradient>
    </View>
);

CloseBar.propTypes = {
    onPress: PropTypes.func,
};

export default CloseBar;