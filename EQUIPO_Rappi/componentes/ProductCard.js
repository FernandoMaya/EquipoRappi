import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import TouchableCmp from './UI/TouchableCmp';

const ProductCard = (props) => {
    const redirect = () => {
        props.navigation.navigate("ProductDetails", { productInfo: props.productInfo });
    }
    return (
        <View style={styles.card}>
            <TouchableCmp onClick={redirect}>
                <View style={{ height: '100%', width: '100%', alignItems:'center' }}>
                    <Image style={styles.image}
                        source={{ uri: props.productInfo.imgUrl }} />
                    <Text style={styles.text}> {props.productInfo.name} </Text>
                </View>
            </TouchableCmp>
        </View>
        
    )/*
     
        <View style={{ alignItems: 'center' }}>
            <Text>Hello {props.id}!</Text>
        </View>
    );*/
    
}

export default ProductCard;

const styles = StyleSheet.create({
    card: {
        width: '50%',
        alignItems:'center',
        height: Dimensions.get('window').height * 0.20,
        justifyContent: 'center',
        backgroundColor: 'white',
        

    },
    image: {
        width: 100,
        height: 80,
        borderRadius: 20,
        resizeMode: 'cover'
    
        
    },
    text:{
        fontFamily: 'montserrat',
        fontSize: 15,
        marginTop: 5
        
        
    }
});
