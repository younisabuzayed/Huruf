/* eslint-disable radix */
import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TeacherImage from '../../../assets/images/teacherImage.png';
import Button, { ButtonOpacity } from '../../components/Button';
import IconSound from '../../components/IconSound';
import { CardsContainer, KeyboradAvoiding } from '../../components';
import data from '../../Api';
import Colors from '../../../assets/colors';
import Alert from '../../components/Alert';

const Letter = () => {
    const [letterInput, setLetterInput] = React.useState('');
    const [isModalVisible, setModalVisible] = React.useState(false);
    const clear = React.useRef();
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
      console.log(isModalVisible);
    };

    const navigation = useNavigation();
    const letter = [];
    const route = useRoute();
    let idLetter = route.params.id;
    data.filter(id => id.id === idLetter).map( letters => letter.push(letters));
    const dataLetter = letter[0];
    //counter for next step
    const counterAddition = 1 + parseInt(idLetter);
    //counter for back step
    const counterSubtraction = parseInt(idLetter) - 1;
    const onPressNext = () =>
    {
      letterInput === dataLetter?.letter
      ? navigation.navigate('Letter',{id: counterAddition.toString()})
      : toggleModal();
      setLetterInput('');
    };
    const onPressNextEnd = () =>
    {
      letterInput === dataLetter?.letter
      ? navigation.navigate('Congratulations')
      : toggleModal();

    };
    return (
      <KeyboradAvoiding
        style={styles.container} >
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Letters')} >
              <AntDesign name="arrowright" size={35} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <View
            style={styles.imageBackgroundView} >
            <ImageBackground
                source={TeacherImage}
                style={styles.imageBackground}
                resizeMode="contain" >
                <View
                  style={styles.LetterView}>
                    <Text
                      style={styles.textLetterBig}>{dataLetter?.letter}</Text>
                    <Text
                      style={styles.textLetterSmall} >{dataLetter?.name}</Text>
                </View>
                <View
                  style={styles.soundIconView} >
                    <IconSound
                      source={dataLetter?.sound} />

                </View>
            </ImageBackground>
          </View>
          <View>
            <View>
                <CardsContainer
                data={dataLetter?.animal}
                mainTitle="حيوانات"
                 />
            </View>
            <View>
                <CardsContainer
                data={dataLetter?.plants}
                mainTitle="نباتات" />
            </View>
          </View>
          <View
            style={styles.textAreaView} >
            <Text
              style={styles.titleTextAreaView} >اكتب الحرف </Text>
            <TextInput
             style={styles.textInput}
             ref={clear}
             textAlign="center"
             selectionColor={'#9F0DFF'}
             value={letterInput}
             onChangeText={(letter) => setLetterInput(letter)}
              />
          </View>
          <View
            style={styles.buttonNextPrev} >
                {idLetter == 28 ? <ButtonOpacity
               title="النهائية"
               onPress={onPressNextEnd}
                /> : <ButtonOpacity
               title="التالي"
               onPress={onPressNext}
                />}
            {idLetter > 1 && <ButtonOpacity
               title="السابق"
               onPress={() =>  navigation.navigate('Letter',{id: counterSubtraction.toString()})} />}
          </View>
          <Alert
            isVisible={isModalVisible}
            onPress={toggleModal}
            title="يوجد خطا" />
        </KeyboradAvoiding>
    );
};

export default Letter;
