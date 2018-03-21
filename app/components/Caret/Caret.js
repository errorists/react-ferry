import React from 'react';
import { Animated, View } from 'react-native';

const tintColor = '#3D5AFE';

class Caret extends React.Component {
	state = {
		blinkAnim: new Animated.Value(0),
	}
  
	componentDidMount() {
		this.runAnimation()
	}
	componentWillUnmount() {
		Animated.timing(
			this.state.blinkAnim
		).stop();
	}

	runAnimation() {
		this.state.blinkAnim.setValue(0);
		Animated.timing(this.state.blinkAnim, {
			toValue: 1,
			duration: 750,
		}).start(() => this.runAnimation());
	}
  
	render() {
		let { blinkAnim } = this.state;
  
		return (
			<Animated.View
				style={{
					width: 4,
					height: 32,
					borderRadius: 2,
					backgroundColor: tintColor,
					opacity: blinkAnim,
				}}
			>
				{this.props.children}
			</Animated.View>
			);
	}
}

export default Caret;