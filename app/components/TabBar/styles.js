import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    tab: {
        width: 48,
        height: 48,
    },
    tabImage: {
        tintColor: '#BFC3CC'
    },
    selectedTab: {
        tintColor: '#000'
    }
});