import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import TrackPlayer from 'react-native-track-player';

const CardsContainer = ({mainTitle, data, source}) => {

    React.useEffect(() =>
    {

        handlePress;
    }, []);
    const handlePress = async (item) =>
    {
        await TrackPlayer.setupPlayer();

        // Add a track to the queue
        await TrackPlayer.add({
            id: '1',
            url: item.sound,
        });

        // Start playing it
       await TrackPlayer.play();
    };
    return (
        <View
        style={styles.cards} >
            <View
              style={styles.titleCards} >
                <Text
                style={styles.title}>
                {mainTitle}
                </Text>
            </View>
            <FlatList
              data={data}
              horizontal
              contentContainerStyle={styles.flatListContainer}
              keyExtractor={(index) => index.id}
              renderItem={({item}) =>
              {
                  return (
                    <View
                        style={styles.cardsButtonView} >
                            <TouchableOpacity
                                style={styles.cardsButton}
                                onPress={() =>handlePress(item)}>
                                <Image
                                    source={item.image}
                                    style={styles.imageCard}
                                    resizeMode="contain" />
                                    <Text
                                    style={styles.titleCard} >{item.title}</Text>
                            </TouchableOpacity>
                    </View>
                  );
              }} />

        </View>
    );
};

export default CardsContainer;
