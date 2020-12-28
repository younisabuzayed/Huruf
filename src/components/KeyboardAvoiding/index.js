import React from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

const KeyboradAvoiding = ({style, children}) => {
    
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={style} >
            <ScrollView
             showsVerticalScrollIndicator={false} >{children}</ScrollView>
        </KeyboardAvoidingView>
    );
};

export default KeyboradAvoiding;
