import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const Container = ({children, bottom}) => {

	const containerStyles = [styles.container]
	if (bottom === true) {
		containerStyles.push(styles.containerWhite);
	}

	return (
		<View style={containerStyles}>
			{children}
		</View>
	);
};

Container.propTypes = {
	children: PropTypes.any,
	bottom: PropTypes.bool,
};

export default Container;
