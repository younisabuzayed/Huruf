import {StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
const styles = StyleSheet.create({
    button:
    {
        height: 55,
        backgroundColor: Colors.white,
        marginLeft:55,
        marginRight: 55,
        borderRadius: 12,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 28,
    },
    title:
    {
        fontSize: 18,
    },
    buttonOpacity:
    {
        marginBottom: 28,
        marginLeft: 16,
        marginRight: 16,
    },
    titleOpacity:
    {
        fontSize: 18,
        color: Colors.white,
        fontFamily: Fonts.Roboto_Bold,
    },
});

export default styles;
