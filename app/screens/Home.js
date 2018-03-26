import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableHighlight, Dimensions, Platform } from 'react-native';
import { connect } from 'react-redux';

import { Caret } from '../components/Caret';
import { TypeButton } from '../components/TypeButton';
import { TabBar } from '../components/TabBar';
import { Key } from '../components/Key';

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
  
class Home extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			value: null,
			displayValue: this.props.displayValue,
		}
	}

	static propTypes = {
		navigation: PropTypes.object,
		dispatch: PropTypes.func,
		topType: PropTypes.string,
		bottomType: PropTypes.string,
		conversionRate: PropTypes.number,
		isFetching: PropTypes.bool,
	};
	
	clearAll() {
		this.setState({
			value: null,
			displayValue: '0',
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
			})
		}
	}
	
	inputDigit(digit) {
		const { displayValue } = this.state
		this.setState({
		displayValue: displayValue === '0' ? String(digit) : displayValue + digit
		})
	}

	handlePressTopValue = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Input Value', type: 'input'});
	};
	handlePressBottomValue = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Return Value', type: 'return'});
	};
  
	render() {
		const { displayValue } = this.state
		
		let returnAmount = (parseFloat(displayValue.replace(",", ".")) * this.props.conversionRate).toFixed(2);
		let returnCorrected = returnAmount === '0.00' ? '0' : returnAmount;
		if (this.props.isFetching) {
			returnCorrected = '...';
		}
		
		return (
			<View style={{ flex: 1, backgroundColor: '#EBF5F5' }} >
				<View style={styles.topContainer}>
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
							<ValueInput value={returnCorrected} ></ValueInput>
						</View>
						<View style={{ flex: 1.5}}></View>
					</View>
					<TabBar />
				</View>
				<View style={styles.bottomContainer}>
					<View style={styles.keypadFrame}>
						<View style={styles.row}>
							<Key 
								onPress={() => this.inputDigit(1)}
								colors={['#C6FF41', '#D1FF41']}
								text={<Text style={styles.keyLabel}
								>1</Text>}
							></Key>
							<Key 
								onPress={() => this.inputDigit(2)}
								colors={['#C6FF41', '#D1FF41']}
								text={<Text style={styles.keyLabel}
								>2</Text>}
							></Key>
							<Key 
								onPress={() => this.inputDigit(3)}
								colors={['#C6FF41', '#D1FF41']}
								text={<Text style={styles.keyLabel}
								>3</Text>}
							></Key>
						</View>
						<View style={styles.row}>
							<Key 
								onPress={() => this.inputDigit(4)}
								colors={['#D0FF43', '#D9FF41']}
								text={<Text style={styles.keyLabel}
								>4</Text>}
							></Key>
							<Key 
								onPress={() => this.inputDigit(5)}
								colors={['#D0FF43', '#D9FF41']}
								text={<Text style={styles.keyLabel}
								>5</Text>}
							></Key>
							<Key 
								onPress={() => this.inputDigit(6)}
								colors={['#D0FF43', '#D9FF41']}
								text={<Text style={styles.keyLabel}
								>6</Text>}
							></Key>
						</View>
						<View style={styles.row}>
							<Key 
								onPress={() => this.inputDigit(7)}
								colors={['#DAFF42', '#E4FE41']}
								text={<Text style={styles.keyLabel}
								>7</Text>}
							></Key>
							<Key 
								onPress={() => this.inputDigit(8)}
								colors={['#DAFF42', '#E4FE41']}
								text={<Text style={styles.keyLabel}
								>8</Text>}
							></Key>
							<Key 
								onPress={() => this.inputDigit(9)}
								colors={['#DAFF42', '#E4FE41']}
								text={<Text style={styles.keyLabel}
								>9</Text>}
							></Key>
						</View>
						<View style={styles.row}>
							<Key 
								onPress={() => this.inputDot()}
								colors={['#E3FF40', '#EEFF41']}
								text={<Text style={styles.keyLabel}
								>.</Text>}
							></Key>
							<Key 
								onPress={() => this.inputDigit(0)}
								colors={['#E3FF40', '#EEFF41']}
								text={<Text style={styles.keyLabel}
								>0</Text>}
							></Key>
							<Key 
								onPress={() => this.clearLastChar()}
								colors={['#E3FF40', '#EEFF41']}
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
	const conversionSelector = state.currencies.conversions[topType] || {};
	const rates = conversionSelector.rates || {};

	return {
		topType,
		bottomType,
		displayValue: state.currencies.amount,
		conversionRate: rates[bottomType] || 0,
		isFetching: conversionSelector.isFetching,
	};
};

export default connect(mapStateToProps)(Home);