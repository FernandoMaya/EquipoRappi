import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from "react-redux";


export function BotonaMapa(props) {
    const redirect = () => {
        props.navigation.navigate("Mapa");
    }
    const cartTotal = useSelector(state => state.cart.total);
    return (
        <View style={{ width: '95%', height: 50, backgroundColor: '#2AD881', borderRadius: 20, marginStart: 10 }}>
            <TouchableOpacity onPress={redirect} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                <Text style={styles.precio}>0</Text>
                <Text style={styles.text}>Hacer pedido</Text>

                <Text style={styles.precio}>${cartTotal +6+15}.00</Text>
            </TouchableOpacity>
        </View>
    );
}
export default BotonaMapa;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'montserrat',
        color: 'white'
    },
    precio: {
        fontFamily: 'montserrat-bold',
        color: 'white'
    }
});

