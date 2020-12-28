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
    header:
    {
        width,
        alignItems: 'flex-start',
        paddingLeft: 15,
        paddingTop: 15,
    },
    imageBackgroundView:
    {
        alignItems:'center',
        marginTop: 66,
    },
    imageBackground:
    {
        width: 342,
        height: 342,
    },
    LetterView:
    {
        flexDirection: 'row',
        alignItems:'center',
        alignSelf:'center',
        marginLeft:110,
        marginTop: 60,
        marginBottom:-45,
    },
    textLetterBig:
    {
        fontSize: 87,
        marginRight: 25,
        color:Colors.white,

    },
    textLetterSmall:
    {
        fontSize: 32,
        color:Colors.white,

    },
    soundIconView:
    {
        alignItems:'flex-end',
        marginRight: 30,
    },
    textAreaView:
    {
        marginTop: 40,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 60,

    },
    titleTextAreaView:
    {
        fontSize: 18,
        fontFamily: Fonts.Roboto_Bold,
        color: Colors.white,
    },
    textInput:
    {
        backgroundColor: Colors.white,
        height: 87,
        borderRadius: 12,
        marginTop: 18,
        color:Colors.black,
        fontFamily:Fonts.Roboto_Bold,
        fontSize: 35,
        padding: 10,
        writingDirection:'rtl',
    },
    buttonNextPrev:
    {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
});

export default styles;
