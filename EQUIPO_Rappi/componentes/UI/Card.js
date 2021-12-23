import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

const Card = (props) => {
    return (
        <View style={[styles.card, props.style]}>
            {props.children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        //marginHorizontal: '1.5%', //marginhoritzontal da un margen de los horizontes?
        //height: Dimensions.get('window').height * 0.25, //Explicar esto
        backgroundColor: 'white',
        overflow: 'hidden', // Explicar esto
    }
});
