import * as React from 'react';
import { StyleSheet, View, Text, Image, Alert, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather, FontAwesome5} from '@expo/vector-icons';

const showAlert = () =>
    Alert.alert(
        "",
        "Opción no disponible",
    );
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imagen}>
                <Image
                    style={styles.imagen}
                    source={require('../assets/1.jpeg')}
                />
            </View>
            <View style={styles.botones}>
                <TouchableOpacity
                    style={{
                        alignContent: 'center',
                        justifyContent: 'space-around',
                        width: "80%",
                        height: 50,
                        flexDirection: 'row',
                        backgroundColor: '#4582f4',
                        borderRadius: 50,
                    }}
                    onPress={showAlert}
                ><AntDesign name="google" size={24} color="white" style={styles.icono} />
                    <Text style={styles.textoB}>Continúa con Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        alignContent: 'center',
                        justifyContent: 'space-around',
                        width: "80%",
                        height: 50,
                        flexDirection: 'row',
                        backgroundColor: '#2bd981',
                        borderRadius: 50,
                    }}
                    onPress={() => navigation.navigate('SmsScreen')}
                ><Feather name="phone" size={24} color="white" style={styles.icono} />
                    <Text style={styles.textoB}>Continúa con tu Celular</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        // alignContent:'center',
                        justifyContent: 'space-around',
                        width: "80%",
                        height: 50,
                        flexDirection: 'row',
                        backgroundColor: '#1776f0',
                        borderRadius: 50,
                    }}
                    onPress={showAlert}
                ><FontAwesome5 name="facebook" size={22} color="white" style={styles.icono} />
                    <Text style={styles.textoB}>Continúa con Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        // alignContent:'center',
                        justifyContent: 'space-around',
                        width: "80%",
                        height: 27,
                        flexDirection: 'row',
                    }}
                    onPress={showAlert}
                >
                    <Text style={styles.texto}>Otros Métodos de ingreso</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    imagen: {
        paddingTop: 80,
        height: "76%",
        width: "100%",
    },
    botones: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: "50%",
        width: "100%",
        paddingBottom: 150,
        marginTop: -70,
        borderRadius: 10,
    },
    textoB: {
        fontFamily: 'roboto-bold',
        fontSize: 14,
        alignSelf: 'center',
        color: '#fff',
        justifyContent: 'center',
        paddingRight: 40,
    },
    texto: {
        paddingTop: 10,
        fontSize: 15,
        alignSelf: 'center',
        color: '#29d780'
    },
    icono: {
        paddingTop: 13,
        paddingLeft: 5,
    }
});
