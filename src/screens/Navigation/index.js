import React from 'react';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Main, Letters, Letter, Congratulations} from '../';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import Colors from '../../../assets/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const stack = createStackNavigator();
 const RootNavigation = () => {
    return (
      <NavigationContainer>
          <stack.Navigator
            initialRouteName="Main"
             >
              <stack.Screen
                name="Main" component={Main}
                options={{headerShown: false}} />
              <stack.Screen
                name="Letters"
                component={Letters}
                options={({navigation}) =>({
                    headerTitle: 'حروف اللغة العربية',
                    headerTitleAlign:'center',
                    headerLeft:() => (
                      <View style={styles.header}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Main')} >
                          <AntDesign name="arrowright" size={35} color={Colors.white} />
                        </TouchableOpacity>
                      </View>
                    ),
                    headerStyle:{
                        backgroundColor:Colors.background,
                    },
                    headerTitleStyle:styles.headerText,
                    headerTintColor:Colors.white,
                })} />
              <stack.Screen
                name="Letter"
                component={Letter}
                options={{
                    headerTitle: '',
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:Colors.background,
                    },
                    headerTitleStyle:styles.headerText,
                    headerTintColor:Colors.white,
                    headerShown: false,
                }} />
                <stack.Screen
                name="Congratulations"
                component={Congratulations}
                options={{
                    headerTitle: '',
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:Colors.background,
                    },
                    headerTitleStyle:styles.headerText,
                    headerTintColor:Colors.white,
                    headerShown: false,
                }} />
          </stack.Navigator>
      </NavigationContainer>
    );
  };

  export default RootNavigation;
