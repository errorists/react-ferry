import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const deviceWidth = Dimensions.get('window').width

export default EStyleSheet.create({
	container: {
		width: deviceWidth,
		height: '50%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '$containerTopColor'
	},
	containerWhite: {
		backgroundColor: '$containerBottomColor',
	}
});
