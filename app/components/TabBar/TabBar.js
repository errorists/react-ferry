import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './styles';

class TabBar extends React.Component {
	render() {
		return (
			<View style={{ height: 60 }}>
                <LinearGradient
                    colors={['#EFF0FA', '#FFF']}
                    style={styles.container}
                    />
			</View>
        );
	}
}

export default TabBar;