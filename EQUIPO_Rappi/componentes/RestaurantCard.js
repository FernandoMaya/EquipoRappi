import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import TouchableCmp from './UI/TouchableCmp';

const RestaurantCard = (props) => {
    const redirect = () => {
        props.navigation.navigate("ProductDetails", { productInfo: props.productInfo });
        //sirve para redirigir a la imagen corrrespondiente
    }
    return (
        <View style={styles.card}>
            <TouchableCmp onClick={redirect}>
                <View style={{ height: '100%', width: '100%', flexDirection: 'row' }}>
                    <Image style={styles.image}
                        source={{ uri: props.productInfo.imgUrl }} />
                        <View style={{flexDirection: 'column'}}>
                        <Text style={styles.titulo}> {props.productInfo.name} </Text>
                            <Text style={styles.comida}> {props.productInfo.comida} </Text>
                        <Text style={styles.text}> {props.productInfo.stats} </Text>
                        </View>
                </View>
            </TouchableCmp>
        </View>

    )/*
     
        <View style={{ alignItems: 'center' }}>
            <Text>Hello {props.id}!</Text>
        </View>
    );*/

}

export default RestaurantCard;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: Dimensions.get('window').height * 0.15,
        marginBottom: 15,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 15,
        resizeMode: 'cover'
    },
    text: {
        fontFamily: 'montserrat',
        fontSize: 13,
        marginStart: 10
    },
    titulo: {
        fontFamily: 'montserrat-bold', 
        fontSize: 14, 
        marginStart: 10
    },
    comida: {
        fontFamily: 'montserrat',
        color: 'gray',
        marginStart: 10,
        marginTop: 10,
        fontSize: 13
    }
});
