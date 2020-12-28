import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import data from '../../Api';
import styles from './style';

const Letters = () => {
    const navigation = useNavigation();
    return (
        <View
        style={styles.container} >
            <View
              style={styles.containerLetters} >
              <FlatList
              data={data}
              numColumns={4}
                renderItem={({item}) => (
                            <TouchableOpacity
                            onPress={() => navigation.navigate('Letter',{
                                id: item.id,
                            })}
                            style={styles.lettersView} >
                                <Text
                                style={styles.titleLetter} >{item.letter}</Text>
                            </TouchableOpacity>
                    )} />
            </View>
        </View>
    );
};

export default Letters;
