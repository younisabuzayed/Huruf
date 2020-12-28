import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: Colors.background,
    },
    containerLetters:
    {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 33,
        alignItems: 'center',
    },
    lettersView:
    {
        backgroundColor:Colors.white,
        width: 68,
        height: 68,
        borderRadius: 12,
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 16,

    },
    titleLetter:
    {
        fontSize: 46,
        fontFamily: Fonts.Roboto_Bold,
        color: Colors.letterColor,

        textAlign:'center',
    },
});

export default styles;
