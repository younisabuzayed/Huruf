import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../assets/colors';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: Colors.background,
        height,
    },
    imageView:
    {
        alignItems:'center',
        marginTop: 66,
        marginBottom: 66,

    },
    buttonAndImageView:
    {
        justifyContent:'space-between',
        flexDirection:'column',
        flex:1,
    },
    buttonView:
    {},
    card:
    {
        width: 300,
    },
    image:
    {
        width: 266,
        height: 274,
    },
    imageBottom:
    {
        width,
        height: 150,
    },
});

export default styles;
