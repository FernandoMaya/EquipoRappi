import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert, disabled } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const showAlert = () =>
    Alert.alert(
        "",
        "Opción no disponible",
    );

const SmsScreen = ({ navigation }) => {
    const [number, setNumber] = useState(null);
    const onPress = () => {
        try {
            number.length == 10 ?
                navigation.navigate('CodigoScreen')
                : disabled
        } catch (e) {
            Alert.alert("Error", "Campos vacios", [{ text: 'ok' }])
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Agrega tu número celular, así podremos reconocerte</Text>
            <TouchableOpacity
                style={{
                    alignContent: 'center',
                    justifyContent: 'flex-start',
                    // justifyContent:'space-around',
                    width: "80%",
                    height: 50,
                    marginTop: 20,
                    flexDirection: 'row',
                    // backgroundColor:'#1776f0',
                    borderRadius: 50,
                    borderColor: 'black',
                    marginLeft: -55
                }}
            >
                <Image
                    style={styles.imagen}
                    source={{ uri: 'https://img.icons8.com/color/48/000000/mexico-circular.png', }}
                /><Text style={styles.textoB}>+52</Text>
                <TextInput
                    style={{
                        marginLeft: 20,
                        flexDirection: 'row',
                    
                    }}
                    onChangeText={(value) => setNumber(value)}
                    keyboardType={'phone-pad'}
                    autoFocus={true}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navA}
                onPress={onPress}
            ><AntDesign name="message1" size={24} color="white" style={styles.icono} />
                <Text style={{
                    fontFamily: 'roboto-bold',
                    fontSize: 15,
                    alignSelf: 'center',
                    color: 'white',
                }}>Recibir código por SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navB}
                onPress={showAlert}
            ><FontAwesome name="whatsapp" size={24} color="#29d780" style={styles.icono} />
                <Text style={{
                    fontFamily: 'roboto-bold',
                    fontSize: 15,
                    alignSelf: 'center',
                    color: '#29d780',
                }}>Recibir código por WhatsApp</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SmsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    texto: {
        fontFamily: 'roboto-bold',
        marginRight: 38,
        fontSize: 27,
        alignSelf: 'center',
        color: 'black',
    },
    imagen: {
        marginTop: 10,
        height: "50%",
        width: "10%",
        flexDirection: 'row',
    },
    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    textoB: {
        fontFamily: 'roboto-bold',
        fontSize: 20,
        alignSelf: 'center',
        color: 'black',
    },
    navA: {
        marginTop: 90,
        alignContent: 'center',
        justifyContent: 'space-evenly',
        width: "80%",
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#2bd981',
        borderRadius: 50,
        marginBottom: 15,
    },
    navB: {
        alignContent: 'center',
        justifyContent: 'space-evenly',
        width: "80%",
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 50,
        marginBottom: 15,
    },
    icono: {
        paddingTop: 13,
    }
});
