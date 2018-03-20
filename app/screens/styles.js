import EStyleSheet from 'react-native-extended-stylesheet';

const tintColor = '#EEFF41';

export default EStyleSheet.create({
    inputContainer: {
		minHeight: 60,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputLabel: {
		textAlignVertical: 'center',
		textAlign: 'center',
		height: 60,
		maxWidth: '92%',
		color: '#FFF',
		fontSize: 44,
		lineHeight: 62,
		fontFamily: 'expandedRegular',
		marginLeft: 8,
		marginRight: 4,
	},
	container: {
		flex: 1,
		backgroundColor: '#000'
	},
	inputFrame: {
		flex: 2,
		backgroundColor: '#000',
	},
	separator: {
		height: 40,
		paddingHorizontal: '20%',
		justifyContent: 'center',
	},
	separatorLine: {
		height: 4,
		backgroundColor: '#222',
		borderRadius: 2,
	},
	tabFrame: {
		height: 56,	
		backgroundColor: '#000',
	},
	keypadFrame: {
		flex: 3,
		borderBottomWidth: 34,
		borderBottomColor: tintColor,
		alignItems: 'stretch',
	},
	key: {
		flex: 1,
		minHeight: 60,
		backgroundColor: tintColor,
		justifyContent: 'center',
		alignItems: 'center',
	},
	keyLabel: {
		textAlign: 'center',
		textAlignVertical: 'center',
		height: '100%',
		fontSize: 34,
		lineHeight: 76,
		fontFamily: 'expandedLight',
		color: '#000'
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 1,
	},
})