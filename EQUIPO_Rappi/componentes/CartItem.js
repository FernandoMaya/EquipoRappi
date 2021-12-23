import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Platform } from 'react-native';
import { Divider } from "react-native-elements";
import Card from "./UI/Card";
//import InputSpinner from "./UI/InputSpinner";
import { Feather, Entypo} from "@expo/vector-icons";
import TouchableComponent from "./UI/TouchableCmp";
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import * as cartActions from "../store/actions/cartActions";
import { useDispatch } from "react-redux";
const CartItem = (props) => {  //Cartas cuando se registran
    
    const dispatch = useDispatch();
    const deleteItemFromCart = () => {
        try {
            //si llega con id
            dispatch(cartActions.deleteItemFromCart(props.item))
        } catch (e) {
            //console.log(e)
        }
    }
    
    //console.log("POPS", props)
    return (
        <Card style={styles.product}>
            <View style={{ flexDirection: 'row',}}>
                <Image source={{ uri: props.item.imgUrl }} style={styles.image} />
                <View style={{marginLeft: 10}}>
                    <Text style={styles.restTitle}>{props.item.name}</Text>
                    <Text style={styles.cost}>${props.item.cost}</Text>
                </View>
            </View>
            <View>
                {/*
                <TouchableOpacity>
                    <Icon name="delete" size={30} color="#900" onPress={deleteItemFromCart}/>
                </TouchableOpacity>
                */}
            </View>
            <View style={{flexDirection: 'row', marginStart: '70%', marginBottom: 10}}>
                <View>
                    <TouchableOpacity>
                        <Feather name="trash" size={20} onPress={deleteItemFromCart}/>
                    </TouchableOpacity>
                </View>
                <Text style={{fontFamily: 'montserrat', fontSize: 15, fontWeight: 'bold', marginStart:  25 }}>1</Text>
                <View style={{marginStart: 25}}>
                    <TouchableOpacity>
                        <Entypo name="plus" size={22} />

                    </TouchableOpacity>
                </View>
                
            </View>
            <Divider style={styles.separatorLine} />
            
        </Card>

    )
}

export default CartItem;
const styles = StyleSheet.create({

    product: {
        width: '100%',
        height: Dimensions.get('window').height * 0.15,
        paddingRight:20,
        flexDirection: 'column',
        paddingLeft: 20,
  
        
    },
    costContainer: {
        width: '0%',
        height: '100%',
        // backgroundColor:'red',
        alignItems: 'flex-end',
    },
    cost: {
        fontFamily: 'montserrat-bold',
        marginLeft: 5
     
    },
    restTitle: {
        fontSize: Dimensions.get('window').height * 0.019,
        fontFamily: 'montserrat',
        color: 'black',
        margin: '3%',
     
    },
    separatorLine: {
        marginHorizontal: '1%',
        width: '100%',
       
        backgroundColor: 'grey',
        margin: StyleSheet.hairlineWidth,
    },
    imgContainer: {
        width: '25%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10, //Ocultar para IMG completa

    },
    image: {
        width: Dimensions.get('window').height * 0.08,
        height: Dimensions.get('window').height * 0.08,
        borderRadius: 25, //Ocultar para IMG completa
    },
    editQty: {
        width: '33%',
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
    },
    spinnerContainer: {
        height: '35%',
    },
  
});