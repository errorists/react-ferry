import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    listTouch: {
        height: 60,
        borderRadius: 12,
        marginVertical: 4,
        marginHorizontal: 12,
    },
	listItem: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        paddingHorizontal: 12,
    },
    selectedItem: {
        backgroundColor: '$selectionColor',
    },
    currencyLabel: {
        fontFamily: 'condensed',
        minWidth: 72,
        height: 60,
        lineHeight: 64,
        fontSize: 50,
        color: '#BFC3CC',
        letterSpacing: 2,
    },
    titleLabel: {
        fontFamily: 'expandedRegular',
        fontSize: 18,
        height: '100%',
        lineHeight: 64,
        textAlignVertical: 'center',
        color: '#3A6961',
        marginBottom: 1,
        fontWeight: '400',
    },
    selectedLabel: {
        color: '#000',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 108,
    },
    closeBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 88,
    },
    closeIcon: {
        width: 24,
        height: 24,
    }
});