import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableHighlight, Dimensions, Platform, Animated } from 'react-native';
import { connect } from 'react-redux';
import TouchableScale from 'react-native-touchable-scale';

import { Caret } from '../components/Caret';
import { TypeButton } from '../components/TypeButton';
import { changeCurrencyAmount } from '../actions/currencies';
import styles from './styles'

class ValueInput extends React.Component {
  
	render() {
		const { value } = this.props
		const { hasCaret } = this.props
			
		const language = navigator.language || 'en-US'
		let formattedValue = parseFloat(value).toLocaleString(language, {
			useGrouping: true,
			maximumFractionDigits: 6
		})
		
		const trailingZeros = value.match(/\.0*$/)
	  
		if (trailingZeros)
			formattedValue += trailingZeros

		const caret = hasCaret ? (
			<Caret/>
			) : (
			null
			);
	  
		return (
			<View style={styles.inputContainer}>
				<Text
					selectable={true}
					children={formattedValue}
					style={[
						styles.inputLabel,
					]}
				/>
				{caret}
			</View>
		)
	}
}
  
class Key extends React.Component {
	render() {
		const { onPress, text, image, onLongPress } = this.props
	
		return (
			<TouchableScale
				onPress={onPress}
				onLongPress={onLongPress}
				style={[
					styles.key,
				]}
				activeScale={0.9}
				pressInTension={750}
				pressInFriction={550}
				pressOutTension={90}
				pressOutFriction={10}
			>{text}{image}
			</TouchableScale>
		)
	}
}
  
class Home extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			value: null,
			displayValue: this.props.displayValue,
			operator: null,
			waitingForOperand: false,
		}
	}

	static propTypes = {
		navigation: PropTypes.object,
		dispatch: PropTypes.func,
		topType: PropTypes.string,
		bottomType: PropTypes.string,
	};
	
	clearAll() {
		this.setState({
			value: null,
			displayValue: '0',
			operator: null,
			waitingForOperand: false
		})
	}
	
	clearLastChar() {
		const { displayValue } = this.state
		
		this.setState({
			displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
		})
	}
	
	inputDot() {
		const { displayValue } = this.state
	  
		if (!(/\./).test(displayValue)) {
			this.setState({
				displayValue: displayValue + '.',
				waitingForOperand: false
			})
		}
	}
	
	inputDigit(digit) {
		const { displayValue, waitingForOperand } = this.state
		
		if (waitingForOperand) {
			this.setState({
			displayValue: String(digit),
			waitingForOperand: false
			})
		} else {
			this.setState({
			displayValue: displayValue === '0' ? String(digit) : displayValue + digit
			})
		}
	}

	handlePressTopValue = () => {
		this.props.navigation.navigate('CurrencyList');
	};
	handlePressBottomValue = () => {
		this.props.navigation.navigate('CurrencyList');
	};
  
	render() {
		const { displayValue } = this.state
		
		const clearDisplay = displayValue !== '0'
		const clearText = clearDisplay ? 'C' : 'AC'
		
		return (
			<View style={{ flex: 1, backgroundColor: '#000' }} >
				<View style={styles.container}>
					<View style={styles.inputFrame}>
						<View style={{ flex: 1.5}}></View>
						<View style={{ flex: 2, justifyContent: 'space-between'}}>
							<TypeButton buttonText={this.props.topType} onPress={this.handlePressTopValue} ></TypeButton>
							<ValueInput hasCaret={true} value={displayValue} ></ValueInput>
						</View>
					</View>
					<View style={styles.separator}>
						<View style={styles.separatorLine}></View>
					</View>
					<View style={styles.inputFrame}>
						<View style={{ flex: 2, justifyContent: 'space-between'}}>
							<TypeButton buttonText={this.props.bottomType} onPress={this.handlePressBottomValue}></TypeButton>
							<ValueInput value={'0'} ></ValueInput>
						</View>
						<View style={{ flex: 1.5}}></View>
					</View>
					<View style={styles.tabFrame}>
						
					</View>
					<View style={styles.keypadFrame}>
						<View style={styles.row}>
							<Key onPress={() => this.inputDigit(1)}
								text={<Text style={styles.keyLabel}>1</Text>}
							></Key>
							<View style={{ width: 1, backgroundColor: "#000" }}></View>
							<Key onPress={() => this.inputDigit(2)}
								text={<Text style={styles.keyLabel}>2</Text>}
							></Key>
							<View style={{ width: 1, backgroundColor: "#000" }}></View>
							<Key onPress={() => this.inputDigit(3)}
								text={<Text style={styles.keyLabel}>3</Text>}
							></Key>
						</View>
						<View style={styles.row}>
							<Key onPress={() => this.inputDigit(4)}
								text={<Text style={styles.keyLabel}>4</Text>}
							></Key>
							<View style={{ width: 1, backgroundColor: "#000" }}></View>
							<Key onPress={() => this.inputDigit(5)}
								text={<Text style={styles.keyLabel}>5</Text>}
							></Key>
							<View style={{ width: 1, backgroundColor: "#000" }}></View>
							<Key onPress={() => this.inputDigit(6)}
								text={<Text style={styles.keyLabel}>6</Text>}
							></Key>
						</View>
						<View style={styles.row}>
							<Key onPress={() => this.inputDigit(7)}
								text={<Text style={styles.keyLabel}>7</Text>}
							></Key>
							<View style={{ width: 1, backgroundColor: "#000" }}></View>
							<Key onPress={() => this.inputDigit(8)}
								text={<Text style={styles.keyLabel}>8</Text>}
							></Key>
							<View style={{ width: 1, backgroundColor: "#000" }}></View>
							<Key onPress={() => this.inputDigit(9)}
								text={<Text style={styles.keyLabel}>9</Text>}
							></Key>
						</View>
						<View style={styles.row}>
							<Key onPress={() => this.inputDot()}
								text={<Text style={styles.keyLabel}>.</Text>}
							></Key>
							<View style={{ width: 1, backgroundColor: "#000" }}></View>
							<Key onPress={() => this.inputDigit(0)}
								text={<Text style={styles.keyLabel}>0</Text>}
							></Key>
							<View style={{ width: 1, backgroundColor: "#000" }}></View>
							<Key onPress={() => this.clearLastChar()}
								onLongPress={() => this.clearAll() }
								image={<Image resizeMode='contain' source={require('../assets/images/clearIcon.png')}></Image>}
							></Key>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	const topType = state.currencies.topType;
	const bottomType = state.currencies.bottomType;

	return {
		topType,
		bottomType,
		displayValue: state.currencies.amount,
	};
};

export default connect(mapStateToProps)(Home);