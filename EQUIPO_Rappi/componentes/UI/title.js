import React from 'react';

import { Dimensions, StyleSheet, Text, View } from "react-native";

const Title = (props) => {
    return (
        <View style={[styles.titleContainer, props.titleStyle]}>
            <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
        </View>
    )
}
export default Title;

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'center',
        // alignItems: 'center',
        marginVertical: '2%',
        marginHorizontal: '3%'
    },
    title: {
        fontSize: Dimensions.get('window').height * 0.025,
        fontFamily: 'montserrat'
    }
});
