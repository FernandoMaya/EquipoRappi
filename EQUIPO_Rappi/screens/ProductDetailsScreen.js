import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from "react-redux";
import * as cartActions from "../store/actions/cartActions";
import { StyleSheet, View, Text, Dimensions, FlatList, Image, ScrollView} from "react-native";
import { AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons';
import BotonVerde from '../componentes/UI/BotonVerde';
import { Divider } from 'react-native-elements';



const ProductDetailsScreen = (props) => {

    const { productInfo } = props.route.params
    //console.log(productInfo)
    const producto1 = 
        {   
            id: 10,
            cost : 190.00,
            imgUrl: productInfo.imgUrl,
            name:  'Desayuno 100% mexicano'
            
        }
    const producto2 =
    {
        id: 11,
        cost: 180.00,
        imgUrl: productInfo.imgUrl,
        name: 'Comida Italiana'

    }
    const producto3 = {
        id: 12,
        cost: 350.00,
        imgUrl: productInfo.imgUrl,
        name: 'Combo Teriyaki'

    }
    const producto4 = {
        id: 13,
        cost: 60.00,
        imgUrl: productInfo.imgUrl,
        name: 'Combo tapa-venas'

    }
    
    //console.log(prueba)
    const dispatch = useDispatch();
    const addToCart = () => {
        try {
            dispatch(cartActions.addToCart(producto1))
        } catch (e) {
          
        }
    }
    const addToCart2 = () => {
        try {
            dispatch(cartActions.addToCart(producto2))
        } catch (e) {
          
        }
    }
    const addToCart3 = () => {
        try {
            dispatch(cartActions.addToCart(producto3))
        } catch (e) {
          
        }
    }
    const addToCart4 = () => {
        try {
            dispatch(cartActions.addToCart(producto4))
        } catch (e) {
          
        }
    }
   
    return (
        
        <View style={{elevation: 1, height: '100%'}}>
            <View style={{width: 250, height: 80, elevation: 1, marginStart: '10%', marginTop:'25%', flexDirection: 'row'}}>
                <Image style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10}}
                    source={{ uri: productInfo.imgUrl }} />
                    <View>
                        <Text style={{fontFamily: 'montserrat-bold', color: 'white',fontSize: 19}} >{productInfo.name} </Text>
                    <Text style={{ fontFamily: 'montserrat', color: 'white', marginTop: 8, fontSize: 12 }}>Ver más información 〉</Text>
                    </View>
                
            </View>
            <View style={styles.card}>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <TouchableOpacity style={styles.botones0}>
                       <Ionicons name="time-outline" size={19} color={"orange"}></Ionicons>
                        </TouchableOpacity>
                    <Text style={{marginEnd: 25, marginTop: 8, fontFamily: 'montserrat', fontSize: 12}}>Entrega en: 41 - 56 min</Text>
                   
                        <TouchableOpacity style={styles.botones1}>
                            <AntDesign name="hearto" size={19} color={"black"}></AntDesign>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botones2}>
                            <Ionicons name="ios-arrow-redo-outline" size={22} color={"black"}></Ionicons>
                        </TouchableOpacity>
                </View >
                   
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <TouchableOpacity style={styles.botones1_1}>
                         <MaterialIcons name="delivery-dining" size={19} color={"grey"}></MaterialIcons>
                    </TouchableOpacity>
                    <Text style={{ marginEnd: 25, marginTop: 8, fontFamily: 'montserrat', fontSize: 12 }}>Costo de envío: $19.00</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 10}}>
                    <TouchableOpacity style={styles.botones1_1}>
                        <AntDesign name="star" size={19} color={"orange"}></AntDesign>
                    </TouchableOpacity>
                    <Text style={{ marginEnd: 25, marginTop: 8, fontFamily: 'montserrat', fontSize: 12 }}>Calificación promedio: 4.4</Text>
                </View>
                {/*
                
                <Title title={productInfo.name} />

                <Text style={{ marginLeft: 9 }}>{productInfo.description}{"\n"} </Text>
                <Text style={{ marginLeft: 9 }}>Solamente por: {productInfo.cost} $ mxn</Text>*/}
                <View style={styles.fixToText}>
                    {/*<Button onPress={addToCart} title={"Añadir al carrito"}
                    />
                    <Button onPress={null} title={"saleo"}
                     />*/}
                
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 15}}>
                    <View style={{ backgroundColor:'#eee', width: '95%', height: 40, borderRadius: 30, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ backgroundColor: 'black', width: 150, height: 40, borderRadius: 30,}}>
                            <Text style={styles.text1}>Entrega a domicilio</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text2}>Recoger en tienda</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.botondetalles}>
                    <MaterialIcons name="attach-money" size={12} color={"grey"}></MaterialIcons>
                    <Text style={{fontFamily: 'montserrat', fontSize: 8}}>5% adicional por servicio. Descuentos para Prime.</Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontFamily: 'montserrat-bold',
                            fontSize: 8,
                            color: 'green'
                        }}> Ver detalle</Text>
                    </TouchableOpacity>
                </View>
               
            </View>
            <View style={{height: Dimensions.get('window').height * 0.3,width: '100%'}}>
                <ScrollView>
                    <View>
                        <View style={styles.catalogo}>
                            <View style={{ height: '100%', width: '100%', }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.titulo}>Desayuno 100% mexicano</Text>
                                    <TouchableOpacity style={styles.botoncorazon}>
                                        <AntDesign name="hearto" size={16} color={"black"}></AntDesign>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginTop: -10}}>
                                    <Text style={styles.contenido}>2 Burritos + Omeletts de Huevo</Text>
                                    <Text style={styles.contenido}>Mexicana</Text>
                                </View>
                                
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
                                    <Text style={{fontWeight:'bold', marginTop: 10}}>$190.00</Text>
                                    <TouchableOpacity onPress={addToCart} style={styles.agregar}>
                                        <Text style={styles.botonagregar}>Agregar</Text>
                                    </TouchableOpacity>                                  
                                </View>
                                <Divider style={styles.divider}/>
                            </View>
                        </View>
                        <View style={styles.catalogo}>
                            <View style={{ height: '100%', width: '100%', }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.titulo}>Comida Italiana</Text>
                                    <TouchableOpacity style={styles.botoncorazon}>
                                        <AntDesign name="hearto" size={16} color={"black"}></AntDesign>
                                    </TouchableOpacity>
                                </View>
                                 <View style={{marginTop: -10}}>
                                    <Text style={styles.contenido}>Pizza Napolitana + pasta</Text>
                                    <Text style={styles.contenido}>Italiana</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10 }}>$180.00</Text>
                                    <TouchableOpacity onPress={addToCart2} style={styles.agregar}>
                                        <Text style={styles.botonagregar}>Agregar</Text>
                                    </TouchableOpacity>
                                </View>
                                <Divider style={styles.divider} />
                            </View>
                        </View>    
                        <View style={styles.catalogo}>
                            <View style={{ height: '100%', width: '100%', }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.titulo}>Combo Teriyaki</Text>
                                    <TouchableOpacity style={styles.botoncorazon}>
                                        <AntDesign name="hearto" size={16} color={"black"}></AntDesign>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: -10 }}>
                                    <Text style={styles.contenido}>Yakimeshi + ramen</Text>
                                    <Text style={styles.contenido}>Japonesa</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10 }}>$350.00</Text>
                                    <TouchableOpacity onPress={addToCart3} style={styles.agregar}>
                                        <Text style={styles.botonagregar}>Agregar</Text>
                                    </TouchableOpacity>
                                </View>
                                <Divider style={styles.divider} />
                            </View>
                        </View>
                        <View style={styles.catalogo}>
                            <View style={{ height: '100%', width: '100%', }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.titulo}>Combo tapa-venas</Text>
                                    <TouchableOpacity style={styles.botoncorazon}>
                                        <AntDesign name="hearto" size={16} color={"black"}></AntDesign>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: -10 }}>
                                    <Text style={styles.contenido}>Cheese Cake + helado</Text>
                                    <Text style={styles.contenido}>Postre</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10 }}>$60.00</Text>
                                    <TouchableOpacity onPress={addToCart4} style={styles.agregar}>
                                        <Text style={styles.botonagregar}>Agregar</Text>
                                    </TouchableOpacity>
                                </View>
                                <Divider style={styles.divider} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                
            </View>
            <View style={styles.footerCartContainer}>
                 <BotonVerde {...props}/>
            </View>
        </View>
        
       
    )
}

export default ProductDetailsScreen;

//2.-
export const ProductDetailsScreenOptions = ({ route }) => {
    console.log("-------")
    console.log(route)
    return {
        title: route.params.productInfo.name
    }
}

const styles = StyleSheet.create({
  
    
    card: {
        width: '85%',
        marginHorizontal: '2.5%',
        height: Dimensions.get('window').height * 0.38,
        borderRadius: 15,
        backgroundColor: 'white',
        marginBottom: 15,
        
        marginStart: '8%',
        

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation:5,//sombra
        paddingTop: 15,
        paddingLeft: 15,
        
    },
     image: {
        width: '30%',
        height: '30%',
        borderRadius: 30,
        resizeMode: 'cover',
        marginTop: '0%',
      
    },
    title: {
        fontFamily: 'montserrat',
        fontSize: 18,
        marginLeft: 9,
    },
    fixToText: {
        flexDirection: 'row',
       borderRadius: 15,
        marginLeft: 9,
        marginRight:9,
        marginTop: 15,
        backgroundColor: 'red'
    },
    botones0:{
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 25,
        elevation: 5,
        padding: 3,
        paddingLeft: 5,
        marginLeft: '3%',
        borderColor: 'orange',
        borderWidth: 1
    },
    botones1_1: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 25,
        elevation: 5,
        padding: 3,
        paddingLeft: 5,
        paddingTop: 4,
        marginLeft: '3%',
        
       
    },
    botones1: {
        backgroundColor: 'white',
        height: 35,
        width: 35,
        borderRadius: 25,
        elevation: 5,
        padding: 7,
        marginLeft: '5%'
       
        
   
        
    },
    botones2: {
        backgroundColor: 'white',
        height: 35,
        width: 35,
        borderRadius: 25,
        elevation: 5,
        padding: 7,
        paddingTop: 5,
  
        
    },
    text1:{
        fontFamily: 'montserrat-bold',
        padding: 10,
        marginLeft: 5,
        fontSize: 12,
        color: 'white'

    },
     text2: {
        fontFamily: 'montserrat-bold',
        padding: 4,
        paddingTop: 10,
        fontSize: 12,
        color: 'grey'

    }, 
    botondetalles: { 
        backgroundColor: 'white', 
        width: '95%', 
        height: 25, borderRadius: 10, 
        borderWidth: 1, borderColor: 'grey', 
        flexDirection: 'row',
        padding: 6
        
    },
    footerCartContainer: {
        flexDirection: 'row',
        width: '100%',
        height: Dimensions.get('window').height * 0.1,
        
        alignItems: 'center',
       
        backgroundColor: '#edebeb',
        position: 'absolute',
        bottom: 0,
        elevation: 5
        
    },
    catalogo: {
        width: '100%',
        height: 105,
        backgroundColor: 'white',
        padding: 10,
      

        


    },
    titulo:{
        fontFamily: 'montserrat',

    }, 
    contenido:{
        fontFamily: 'montserrat',
        color: 'grey',
        fontSize: 12
    },
    botonagregar:{
      
        color: 'green', fontFamily: 'montserrat', fontSize: 14, fontWeight: 'bold', shadowColor: "#000",

    },
    divider:{
        marginHorizontal: '1%', 
        backgroundColor: 'grey',
    },
    agregar: { 
        width: 100, 
        height: 25, 
        borderRadius: 15, 
        elevation: 5, 
        backgroundColor: 'white', 
        alignItems: "center", 
        marginTop: 5, 
    },
    botoncorazon:{
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 25,
        elevation: 5,
        padding: 7,
       
    }
    
});
