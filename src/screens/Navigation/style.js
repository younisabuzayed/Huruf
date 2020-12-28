import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    header:
    {
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    headerText:
    {
        fontSize: 24,
        fontFamily: Fonts.Roboto_Bold,
        color: Colors.white,
    },
});

export default styles;
