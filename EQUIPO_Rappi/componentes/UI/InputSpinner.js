import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import TouchableComponent from "./TouchableComponent";

const InputSpinner = props => {

    return (
        <View style={styles.container}>

            <TouchableComponent
                onPress={() => {
                    console.log("Se resto")
                }}
            >
                <View style={styles.plusMinus}>
                    <Text style={styles.textStyle}>{'-'}</Text>
                </View>
            </TouchableComponent>

            <View style={styles.numberContainer}>
                <Text style={styles.textStyle} >{props.quantity}</Text>

            </View>
            <TouchableComponent
                style={styles.plusBttn}
                onPress={() => {
                    console.log("Se añadio")
                }}>
                <Text style={styles.textStyle}>{'+'}</Text>
            </TouchableComponent>
        </View>
    )
}

export default InputSpinner;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width * 0.23,
        height: Dimensions.get('window').height * 0.03,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 20,
    },

    plusBttn: {
        width: Dimensions.get('window').width * 0.077,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    plusMinus: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.07,
        height: '100%',
    },
    numberContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '33%',
        height: '100%',
    },
    textStyle: {
        fontSize: 19,
        color: 'red',
    }
});
