import React from 'react';
import { LinearGradient } from 'expo';
import TouchableScale from 'react-native-touchable-scale';

import styles from './styles';

class Key extends React.Component {
	render() {
		const { onPress, text, image, onLongPress, colors } = this.props
	
		return (
			<TouchableScale
				onPress={onPress}
				onLongPress={onLongPress}
				style={[
					styles.key,
				]}
				activeScale={0.88}
				pressInTension={750}
				pressInFriction={550}
				pressOutTension={90}
				pressOutFriction={10}
                >
                <LinearGradient
                    colors={colors}
                    style={styles.gradient}
                    >
                    {text}{image}
                </LinearGradient>
			</TouchableScale>
		)
	}
}

export default Key;