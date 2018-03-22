import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Tab = ({ onPress, image, selected=false }) => {

    const tabStyles = [styles.tabImage]

    if (selected === true) {
        tabStyles.push(styles.selectedTab);
	}

	return (
        <TouchableOpacity 
            onPress={onPress} 
            style={styles.tab}
        >
            <Image
                resizeMode='contain'
                style={tabStyles}
                source={image}
            />
        </TouchableOpacity>
	);
};

Tab.propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.any,
    selected: PropTypes.bool,
};

export default Tab;