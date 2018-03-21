import EStyleSheet from 'react-native-extended-stylesheet';

const tintColor = '#3D5AFE';

export default EStyleSheet.create({
    topContainer: {
        flex: 3,
        backgroundColor: "#FFF",
        shadowColor: '#00C852',
        shadowOffset: {height: 0},
        shadowOpacity: 1,
        shadowRadius: 30,
        zIndex: 100,
    },
    bottomContainer: {
        flex: 2,
        backgroundColor: "#00796B",
        zIndex: 99,
    },
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
		color: '#000',
		fontSize: 40,
		lineHeight: 64,
		fontFamily: 'expandedRegular',
		marginLeft: 8,
		marginRight: 4,
	},
	inputFrame: {
		flex: 2,
		backgroundColor: '#FFF',
	},
	separator: {
		height: 40,
		paddingHorizontal: '20%',
		justifyContent: 'center',
	},
	separatorLine: {
		height: 4,
		backgroundColor: '#F0F1FC',
		borderRadius: 2,
	},
	tabFrame: {
		height: 60,
		backgroundColor: '#FFF',
	},
	keypadFrame: {
		flex: 1,
		borderBottomWidth: 34,
		borderBottomColor: '#EEFE42',
		alignItems: 'stretch',
	},
	keyLabel: {
		textAlign: 'center',
		textAlignVertical: 'center',
		height: '100%',
		fontSize: 30,
		lineHeight: 74,
		fontFamily: 'expandedLight',
		color: '#3A6961'
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})