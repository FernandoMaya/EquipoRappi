import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';



const ProductRestaurant = (props) => {
    
    return (
        <View>
            <View style={styles.card}>
                <View style={{ height: '100%', width: '100%', }}>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text style={styles.text}>Desayuno 100% mexicano</Text>
                        <TouchableOpacity style={styles.botones1}>
                            <AntDesign name="hearto" size={14} color={"black"}></AntDesign>
                        </TouchableOpacity>
                    </View>
                    
                    <Text>2 Burritos + Omeletts de Huevo</Text>
                    <Text>Mexicana</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>$190.00</Text>
                        <TouchableOpacity  style={{ width: 100, height: 30, borderRadius: 15, elevation: 2, backgroundColor: 'white', alignItems: "center",}}>
                            <Text>Agregar</Text>
                        </TouchableOpacity>
                    </View>

                    
                   
                   
                   <Divider width={1}  />
                </View>
           
            </View>
            <View style={styles.card}>
                <View style={{ height: '100%', width: '100%', }}>

                    <Text style={styles.text}>little caesars</Text>



                    <Divider width={1}  />
                </View>

            </View>
            <View style={styles.card}>
                <View style={{ height: '100%', width: '100%', }}>

                    <Text style={styles.text}>little caesars</Text>



                    <Divider width={1}  />
                </View>

            </View>
            <View style={styles.card}>
                <View style={{ height: '100%', width: '100%', }}>

                    <Text style={styles.text}>little caesars</Text>



                    <Divider width={1}  />
                </View>

            </View>
        </View>

    )/*
     
        <View style={{ alignItems: 'center' }}>
            <Text>Hello {props.id}!</Text>
        </View>
    );*/

}

export default ProductRestaurant;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 120,
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10


    },
  
    text: {
        fontFamily: 'montserrat',
        fontSize: 15,
        marginTop: 5


    },
    botones1: {
        backgroundColor: 'white',
        height: 28,
        width: 28,
        borderRadius: 20,
        elevation: 5,
        padding: 7,
        marginLeft: '5%',

    },
});
