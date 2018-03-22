import React from 'react';
import { View } from 'react-native';

import Tab from './Tab';

import styles from './styles';

class TabBar extends React.Component {
    constructor(props) {
		super(props)
		this.state = {
			displayValue: this.props.displayValue,
		}
	}
	render() {
		return (
			<View style={styles.container}>
                <Tab 
                    image={require('./images/tabCurrency.png')}
                    selected={true}
                />
                <Tab 
                    image={require('./images/tabLength.png')}
                />
                <Tab 
                    image={require('./images/tabArea.png')}
                />
                <Tab 
                    image={require('./images/tabWeigth.png')}
                />
                <Tab 
                    image={require('./images/tabVolume.png')}
                />
                <Tab 
                    image={require('./images/tabSpeed.png')}
                />
                <Tab 
                    image={require('./images/tabWork.png')}
                />
			</View>
        );
	}
}

export default TabBar;