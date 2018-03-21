import React from 'react';
import { View, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { Font } from 'expo';

import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
	$containerColor: '#000', 
	$containerBottomColor: '#FFF',
	$primaryText: '#FFF',
	$secondaryText: '#999',
	$invertText: '#222',
	$selectionColor: '#EEFF41',
});

export default class App extends React.Component {
	state = {
		fontLoaded: false,
	};
	async componentDidMount() {
		await Font.loadAsync({
		  'condensed': require('./assets/fonts/sharpCondensed.ttf'),
		  'expandedLight': require('./assets/fonts/sharpExpandedLight.ttf'),
		  'expandedRegular': require('./assets/fonts/sharpExpandedRegular.ttf'),
		});

		this.setState({ fontLoaded: true });
	}
	
	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1, backgroundColor: '#000' }}>
					<StatusBar barStyle="dark-content"/>
					{
						this.state.fontLoaded ? (
							<Navigator />
						) : null
					}
				</View>
			</Provider>
		)
	} 
};
