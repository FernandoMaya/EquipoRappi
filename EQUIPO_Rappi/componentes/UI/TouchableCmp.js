import React from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';

const TouchableCmp = (props) =>{
    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity; //si es android usa nativefeedback sino usa opacity
    return(
        <TouchableComponent onPress={props.onClick}>
            {props.children}
        </TouchableComponent>
    )
}
export default TouchableCmp;