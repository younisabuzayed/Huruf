import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../../components/Button';
import styles from './style';
import Chlidren from '../../../assets/images/chlidren.png';
import ChlidrenTwo from '../../../assets/images/childrentwo.png';
import { useNavigation } from '@react-navigation/native';
import Alert from '../../components/Alert';

const Main = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

    return (
        <View
          style={styles.container} >
          <View
            style={styles.imageView} >
            <Image
              source={Chlidren}
              style={styles.image} />
          </View>
          <View style={styles.buttonAndImageView}>
            <View
              style={styles.buttonView}>
                <Button
                  title="حروف اللغة العربية"
                  onPress={() => navigation.navigate('Letters')} />
                  <Button
                  title="حروف اللغة الانجليزية"
                  onPress={toggleModal} />
                  <Alert
                    isVisible={isModalVisible}
                    title="سوف يتم توفره قريبا"
                    onPress={toggleModal}
                    cardStyle={styles.card} />
            </View>
            <View>
                <Image
                source={ChlidrenTwo}
                style={styles.imageBottom} />
            </View>
          </View>
        </View>
    );
};

export default Main;
