import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = ({onPress, title,color}) => {
    return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.button} >
           <Text
             style={styles.title} >{title}</Text>
        </TouchableOpacity>
    );
};
export const ButtonOpacity = ({onPress, title,styleTitle}) => {
  return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.buttonOpacity} >
         <Text
           style={[styles.titleOpacity, styleTitle]} >{title}</Text>
      </TouchableOpacity>
  );
};

export default Button;
