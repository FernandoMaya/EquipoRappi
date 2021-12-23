import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome} from '@expo/vector-icons';

export function Pruebas() {
    return (
        <View style={{marginTop: 20}}>
            <Text style={{ fontFamily: 'montserrat-bold', fontSize: 14, marginLeft: 5, }}>Calle Carlos septiembre</Text>
            <View style={{flexDirection: 'row', marginLeft: 5, marginTop: 15, height: '100%'}}>
               
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
                <TouchableOpacity style={styles.boton}>
                    <FontAwesome name="bell" size={24} color={"#FCBB10"}></FontAwesome>
                </TouchableOpacity> 
            </View>
        </View>
    );
}
export default Pruebas;
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "80%",
        
        padding: 10,
        
        borderRadius: 10
    },
    boton:{
        width: 45,
        height: 45,
        backgroundColor: "white",
        borderRadius: 30,
        marginLeft: 35,
        padding: 10,
        elevation: 1
        
    },
    caja:{
        backgroundColor: '#eee',
        borderRadius: 15,
        height: 45,
        width: "74%",
        flexDirection: 'row',
    },
    botonaranja:{
        backgroundColor:'#FE5339',
        height: 40,
        width: 40,
        borderRadius: 15,
        marginTop: 3,
        marginStart: 4,
        padding: 11,
        

    }
});
