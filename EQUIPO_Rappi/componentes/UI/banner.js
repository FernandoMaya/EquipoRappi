import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome, Feather  } from '@expo/vector-icons';

export function Banner() {
    return (
        <View style={{ marginTop: 10 }}>
           
            <View style={{ flexDirection: 'row', marginTop: 15, height: '100%', marginStart: -15}}>

                <View style={styles.caja}>
                    <TextInput
                        style={styles.input}
                        placeholder="Buscar en rappi..."
                        keyboardType="default"
                    />
                    <TouchableOpacity style={styles.botonaranja}>
                        <AntDesign name="search1" size={17} color={"white"}></AntDesign>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.botonexterno}>
                    <Feather name="shopping-bag" size={18} color={"gray"}></Feather>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Banner;
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "80%",

        padding: 10,

        borderRadius: 10
    },
    botonexterno: {
        width: 38,
        height: 38,
        backgroundColor: "white",
        borderRadius: 30,
        marginLeft: 15,
        padding: 10,
        elevation: 3

    },
    caja: {
        backgroundColor: '#eee',
        borderRadius: 15,
        height: 40,
        width: "85%",
        flexDirection: 'row',
        
    },
    botonaranja: {
        backgroundColor: '#FE5339',
        height: 30,
        width: 38,
        borderRadius: 13,
        marginTop: 4,
        marginStart: 5,
        padding: 6,
        paddingLeft:10
        

    }
});
