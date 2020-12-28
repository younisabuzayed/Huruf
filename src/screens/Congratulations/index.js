import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/colors';

const Congratulations  = () => {
  const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Letters')} >
              <AntDesign name="arrowright" size={35} color={Colors.white} />
            </TouchableOpacity>
          </View>
            <Image
              style={styles.image}
              source={require('../../../assets/images/Congratulations.png')}
              resizeMode="contain" />
            <Text
              style={styles.title}>تهانينا لقد أنجزت الحروف </Text>
            <Image
              style={styles.image}
              source={require('../../../assets/images/Congratulations.png')}
              resizeMode="contain" />
        </View>
    );
};

export default Congratulations;
