import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, Button, FlatList } from "react-native";
import CartItem from "../componentes/CartItem";
import { useSelector } from "react-redux";
import { PRODUCTS } from "../dummy-data/data";
import ProductCard from "../componentes/ProductCard";
import BotonArecibo  from '../componentes/UI/BotonArecibo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from "react-native-elements";
import * as cartActions from "../store/actions/cartActions";
import { useDispatch } from "react-redux";

const CartScreen = (props) => { //Pagina para ver el carrito total
    const cartItems = useSelector(state => state.cart.items);
    //const cartTotal = useSelector(state => state.cart.total);
    //console.log(cartItems)
    const dispatch = useDispatch();
    const deleteAllCart = () => {
        try {
            //si llega con id
            dispatch(cartActions.deleteAllCart(props.item))
        } catch (e) {
            //console.log(e)
        }
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                showsVerticalScrollIndicator={true}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <CartItem item={itemData.item} />
                )}
                
            />
            <View style={{flexDirection: 'column'}}>
                <Divider style={styles.separatorLine} />
                <View style={styles.vaciar}>
                   
                    <TouchableOpacity onPress={deleteAllCart}>
                        <Text style={{fontFamily: 'montserrat', color: 'grey'}}>Vaciar Canasta</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerCartContainer}>
                    {/*
            
                <Text style={styles.summaryText}>
                    {'Total Productos: '}
                    <Text style={styles.amount}>$ {cartTotal} mxn</Text>
                </Text>
                <View style={{ width: '30%' }}>
                    <Button 
                        title={'Continuar'}
                        onPress={() => console.log("Se continuo")}
                    />
                </View>
                */}
                    <BotonArecibo {...props}/>
                </View>
            </View>
            
        </View>
    )
}
export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff',
       
    },
    footerCartContainer: {
        flexDirection: 'row',
        width: '100%',
        height: Dimensions.get('window').height * 0.12,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        bottom: 0,
        shadowColor: "#000",
        elevation: 17
   
    },
    summaryText: {
        fontFamily: 'montserrat',
        fontSize: 16,
        color: 'black'
    },
    vaciar:{
     
        width: '100%',
        height: Dimensions.get('window').height * 0.05,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 8
        
    },
    separatorLine:{
        marginHorizontal: '1%',
        width: '100%',
        backgroundColor: 'grey',
        margin: StyleSheet.hairlineWidth,
    }
});
