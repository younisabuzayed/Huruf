import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent:'space-around'
    },
    header:
    {
        width,
        alignItems: 'flex-start',
        paddingLeft: 15,
        paddingTop: 15,
    },
    title:
    {
        fontSize: 27,
        textAlign:'center',
        color: Colors.white,
        fontFamily: Fonts.Roboto_Bold,
    },
    image:
    {
        width,
        height: 280,
    }
});

export default styles;
