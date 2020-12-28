import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
    cards:
    {
        marginTop: 60,
        alignItems:'flex-start',
    },
    titleCards:
    {
        paddingRight: 16,
    },
    title:
    {
        fontSize: 18,
        writingDirection: 'rtl',
        color: Colors.white,
        fontFamily: Fonts.Roboto_Bold,
        marginLeft:16,

    },
    flatListContainer:
    {
        paddingLeft: 10,
        paddingRight: 10,
        width,
        justifyContent:'center',
    },
    cardsButtonView:
    {
        width: 103,
        height:144,
        marginTop: 18,
        backgroundColor: Colors.white,
        borderRadius: 12,
        marginLeft: 10,
        marginRight: 10,
    },
    cardsButton:
    {
        alignItems:'center',
    },
    imageCard:
    {
        width: 130,
        height: 133,
        marginTop: -20,
    },
    titleCard:
    {
        paddingBottom: 5,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: Fonts.Roboto_Bold,
    },
});

export default styles;
