import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const TypeButton = ({ onPress, buttonText }) => {

    var tapHighlight = '#EFF0FA';

    return (
        <TouchableHighlight underlayColor={tapHighlight} style={styles.button} onPress={onPress}>
            <Text style={styles.label}>{buttonText}</Text>
        </TouchableHighlight>
    );
};

TypeButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
};

export default TypeButton;