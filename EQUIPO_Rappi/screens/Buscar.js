import React from 'react';
import { StyleSheet, View, TextInput, Text, FlatList } from 'react-native';
import { PRODUCTOS } from "../dummy-data/data";

export function Buscar() {
    return (
        <View style={{ marginTop: 20, height: 20, backgroundColor: 'green' }}>
            
            <Text>sale</Text>
        </View>
    );
}
export default Buscar;
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "80%",

        padding: 10,

        borderRadius: 10
    },
    boton: {
        width: 45,
        height: 45,
        backgroundColor: "white",
        borderRadius: 30,
        marginLeft: 35,
        padding: 10,
        elevation: 1

    },
    caja: {
        backgroundColor: '#eee',
        borderRadius: 15,
        height: 45,
        width: "74%",
        flexDirection: 'row',
    },
    botonaranja: {
        backgroundColor: '#FE5339',
        height: 40,
        width: 40,
        borderRadius: 15,
        marginTop: 3,
        marginStart: 4,
        padding: 11,


    }
});