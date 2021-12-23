import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from "react-redux";
import BotonaMapa from "../componentes/UI/BotonaMapa";
import { Divider } from "react-native-elements";



export function Recibo(props) {
    const cartTotal = useSelector(state => state.cart.total);
return(
    <View style={styles.container}>
        <View style={{backgroundColor: 'white'}}>
            <View style={styles.botoncuenta}>
                <Text style={styles.textonegro}>Dividir cuenta</Text>
                <Text style={{ fontFamily: 'montserrat-bold', color: '#2AD881', letterSpacing: -1 }}>Seleccionar contactos</Text>
            </View>
            <View style={styles.propina}>
                <Text style={styles.txtnegro}>Propina</Text>
                <Text style={styles.txtnegro}>¡Las entregas solo son posibles gracias a ellos!</Text>
                <Text style={styles.texto}>Añade una propina y reconoce su esfuerzo</Text>
                <View style={{ flexDirection: 'row', width: '100%', marginTop: 7}}>
                    <View style={styles.boton_verde}>
                        <Text>$0</Text>
                    </View>
                    <View style={styles.boton_propina}>
                        <Text>$20</Text>
                    </View>
                    <View style={styles.boton_propina}>
                        <Text>$30</Text>
                    </View>
                    <View style={styles.boton_propina}>
                        <Text>$40</Text>
                    </View>
                    <View style={styles.botonicono}>
                        <Text>Otro</Text>
                        <Feather name='edit-3' size={14} color='grey'></Feather>
                    </View>
                </View>
                <Text style={styles.subtitle}>Tu Rappi recibe el 100% de este valor</Text>
            </View>
        </View>
        <View style={styles.resumen}>
            <Text style={styles.textonegro}>Resumen</Text>
            <Divider style={styles.separatorLine} />
            <View style={styles.catalogo}>
                <Text style={styles.izquierda}>Costo de productos</Text>
                <Text style={styles.derecha}>${cartTotal}</Text>
            </View>
            <View style={styles.catalogo}>
                <Text style={styles.izquierda}>Tarifa de servicio</Text>
                <Text style={styles.derecha}>$6.00</Text>
            </View>
            <View style={styles.catalogo}>
                <Text style={styles.izquierda}>Costo de envío</Text>
                <Text style={styles.derecha}>$15.60</Text>
            </View>
            <View style={styles.catalogo}>
                <Text style={styles.izquierda}>Propina</Text>
                <Text style={styles.derecha}>$0.00</Text>
            </View>
            <Text style={{ fontFamily: 'montserrat', fontSize: 13, textDecorationLine: 'underline'}}>Así funcionan nuestros costos</Text>
            <Divider style={styles.separatorLine} />
            <Text style={styles.izquierda}>Realizamos un cobro a tu método de pago por el valor de la orden. Si hay modificaciones,
                lo ajustaremos al saber el valor final de tu orden
            </Text>
            
        </View>
     
        <View style={styles.footerCartContainer}>
            <BotonaMapa {...props}/>
        </View>
    </View>
    
)
}
export default Recibo;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'montserrat',
        color: 'white'
    },
    precio: {
        fontFamily: 'montserrat-bold',
        color: 'white'
    },
    footerCartContainer: {
        flexDirection: 'row',
        width: '100%',
        height: Dimensions.get('window').height * 0.10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
       
        shadowColor: "#000",
        elevation: 17,
        position: 'relative'

    },
    container:{
        width: '100%',
        height: '100%',
       
    },
    botoncuenta:{
        height: Dimensions.get('window').height * 0.07,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '90%',
        justifyContent:'space-around',
        alignItems: 'center',
        marginHorizontal: '5%',
        borderRadius: 15,
        elevation: 5
    },
    textonegro:{
        fontFamily:'montserrat-bold',
        fontSize: 13,
        letterSpacing: -1

    },
    txtnegro:{
        fontFamily: 'montserrat-bold',
        fontSize: 13,
        marginStart: 10,
        marginTop: 5
    },
    texto:{
        marginStart: 10,
        fontFamily: 'montserrat',
        fontSize: 13,
        marginTop: 2,
        marginBottom: 5
    },
    subtitle:{
        fontFamily: 'montserrat',
        fontSize: 10,
        color: 'grey',
        marginStart: 10,
        marginTop: -5
    },
    propina:{
        width: '100%',
        height: Dimensions.get('window').height * 0.22,
        backgroundColor: 'white',
        marginTop: 15
    },
    boton_propina:{
        width: '15%',
        height: '60%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginStart: '4%',
        elevation: 5
     
    },
    boton_verde:{
        width: '15%',
        height: '60%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginStart: '4%',
        borderColor: '#2AD881',
        borderWidth: 2,
        elevation: 5
    },
    botonicono:{
        width: '15%',
        height: '60%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginStart: '4%',
        flexDirection: 'row',
        elevation: 5
    },
    resumen:{
        width: '100%',
        height: '55%',
        backgroundColor: 'white',
        padding: 10,
        marginTop: 7,
        paddingTop: 20
    },
    separatorLine: {
        marginHorizontal: '1%',
        width: '100%',
        backgroundColor: 'grey',
        margin: StyleSheet.hairlineWidth,
        marginTop: 20,
        marginBottom: 25
    },
    catalogo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, },
    izquierda:{
        fontFamily:'montserrat',
        color:'grey',
        fontSize: 13
    },
    derecha:{
        fontFamily: 'montserrat',
        fontSize: 13
    }

});

