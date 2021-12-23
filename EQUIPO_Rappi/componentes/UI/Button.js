import React from 'react';
import { Dimensions, StyleSheet, Text, View } from "react-native";

export const Button = (props) => {
    return (
        <View style={styles.button}>
            <Text>Boton</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 20
    }
});
