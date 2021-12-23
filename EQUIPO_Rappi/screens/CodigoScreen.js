import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

const CodigoScreen = ({ navigation }) => {

    const [number1, onChangeNumber1] = React.useState(null);
    const [number2, onChangeNumber2] = React.useState(null);
    const [number3, onChangeNumber3] = React.useState(null);
    const [number4, onChangeNumber4] = React.useState(null);
    // let cod = [number1, number2, number3, number4]
    try{
    if (number1 == 1 && number2 == 2 && number3 == 3 && number4 == 4) {
        navigation.navigate('TabNavigator')

    }}
    catch(e){
        console.log(e)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>¿Eres tú? Ingresa el código que te enviamos.</Text>
            <TouchableOpacity
                style={{
                    alignContent: 'center',
                    justifyContent: 'flex-start',
                    width: "80%",
                    height: 50,
                    marginTop: 20,
                    flexDirection: 'row',
                    borderRadius: 50,
                    borderColor: 'black',
                    marginLeft: -55
                }}
            >
                <Image
                    style={styles.imagen}
                    source={{ uri: 'https://img.icons8.com/emoji/48/000000/eyes-emoji.png' }}
                />
                <Text style={styles.text}>VÍA</Text>
            </TouchableOpacity>
            <View style={styles.codigo}>
                <TextInput style={styles.input}
                    onChangeText={onChangeNumber1}
                    value={number1}
                    keyboardType={'phone-pad'}
                    maxLength={1}
                    textAlign='center'
                />
                <TextInput style={styles.input}
                    onChangeText={onChangeNumber2}
                    value={number2}
                    keyboardType={'phone-pad'}
                    maxLength={1}
                    textAlign='center'
                />
                <TextInput style={styles.input}
                    onChangeText={onChangeNumber3}
                    value={number3}
                    keyboardType={'phone-pad'}
                    maxLength={1}
                    textAlign='center'
                />
                <TextInput style={styles.input}
                    onChangeText={onChangeNumber4}
                    value={number4}
                    keyboardType={'phone-pad'}
                    maxLength={1}
                    textAlign='center'
                    onPress={() => navigation.navigate('paginaZ')}
                />
            </View>
            <Text style={{
                marginTop: 80,
                fontSize: 15,
                color: '#727372'
            }}>podrás solicitar un código nuevo en </Text>
            <Text style={{
                color: '#1967b5'
            }}>53 segundos</Text>
        </View>
    )
}
export default CodigoScreen;

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
        marginTop: -50,
        height: "50%",
        width: "10%",
        flexDirection: 'row',
        marginLeft: 214,
    },
    text: {
        color: 'grey',
        //   flexDirection:'row'
        marginLeft: -250,
        marginTop: -10,
        // backgroundColor: 'grey'
    },
    codigo: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 40,
        marginRight: 40,
        padding: 30,
    },
    input: {
        // paddingLeft: 23,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignContent: 'center',
    }
});
