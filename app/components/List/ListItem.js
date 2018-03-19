import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const ListItem = ({ shortLabel, fullLabel, onPress, selected=false }) => {

    const listItemStyles = [styles.listItem]
    const listShortLabelStyles = [styles.currencyLabel]

    if (selected === true) {
        listItemStyles.push(styles.selectedItem),
        listShortLabelStyles.push(styles.selectedLabel);
	}

	return (
        <TouchableHighlight 
            onPress={onPress} 
            underlayColor={'rgba(255,255,255, 0.15)'}
            style={styles.listTouch}
        >
            <View style={listItemStyles}>
                <Text style={listShortLabelStyles}>{shortLabel}</Text>
                <Text style={styles.titleLabel}>{fullLabel}</Text>
            </View>
        </TouchableHighlight>
	);
};

ListItem.propTypes = {
    shortLabel: PropTypes.string,
    fullLabel: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
};

export default ListItem;