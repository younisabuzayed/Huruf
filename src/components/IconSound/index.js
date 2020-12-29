import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import SoundIcon from '../../../assets/images/sound.png';
import TrackPlayer from 'react-native-track-player';


const IconSound = ({source}) => {

    const [state, setState] = React.useState(false);
    const handlePress = async() =>
    {

        await TrackPlayer.setupPlayer();

        // Add a track to the queue
        await TrackPlayer.add({
            id: '1',
            url: source,
        });

        // Start playing it
       await TrackPlayer.play();
    };

    return (
        <TouchableOpacity
         onPress={handlePress}>
            <Image
              source={SoundIcon}
              style={styles.icon} />
        </TouchableOpacity>
    );
};

export default IconSound;
