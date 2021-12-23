import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Feather, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';
import { Divider } from "react-native-elements";

const defaultLocation = {
    latitude: 20.5931,
    longitude: -100.392,
    latitudeDelta: 0.00422,
    longitudeDelta: 0.00421,
}

const MapScreen = () => {
    const [coords, setCoords] = useState(null);

    const addMarker = (event) => {
        setCoords(event.nativeEvent.coordinate)
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={defaultLocation}
                onPress={addMarker}
            >
                {
                    coords ?
                        <Marker key={1} coordinate={coords} image={require('../assets/alfiler.png')} />
                        :
                        null
                    // if(coords){
                    //<Marker key={1} coordinate={coords}/>
                    //}else{
                    //null
                    // }
                }
            </MapView>
            <View style={styles.soporte}>
                <Text style={{fontFamily:'montserrat'}}>Soporte</Text>
                <MaterialCommunityIcons name="headset" size={23} color={'black'}/>
            </View>
            <View style={styles.boton}>
                <Entypo name='paper-plane' size={23} color={'red'}/>
            </View>
            <View style={styles.cuadrosuperior}>
                <Text style={{ fontFamily: 'montserrat', fontSize: 14, color:'#9BA5AB', fontWeight:'bold'}}>Entrega estimada</Text>
                <Text style={{fontFamily:'montserrat-bold', marginStart: 45 }}>10:54 PM</Text>
            </View>
            <View style={styles.cuadromedio}>
                <View style={{flexDirection: 'row'}}>
                    <Image resizeMode='cover' style={styles.image}
                        source={{
                            uri:
                                "https://cdn.donmai.us/original/c7/a5/__hilgendorf_s_tube_nose_bat_kemono_friends_drawn_by_dnsdltkfkd__c7a5b4baf9263b0994f555e6ddad568e.jpg",
                        }}

                    />
                    <View style={{ marginTop: 7, marginStart: 15, marginEnd: 95 }}>
                        <Text style={{ fontFamily: 'montserrat-bold' }}>Gloria Cruz</Text>
                        <Text style={styles.textgris}>Tu Rappi</Text>
                    </View>
                    <View style={{ height: 35, width: 35, borderRadius: 30, borderColor: '#4AB562', borderWidth: 1, padding: 5, marginTop: 5 }}>
                        <Feather name='phone-call' size={23} color={'#4AB562'} />
                    </View>
                    <View style={{ height: 35, width: 35, borderRadius: 30, borderColor: '#4AB562', borderWidth: 1, padding: 5, marginStart: 10, marginTop: 5 }}>
                        <MaterialCommunityIcons name='message-processing-outline' size={23} color={'#4AB562'} />
                    </View>
                </View>
                <Divider style={styles.separatorLine} />
                <View style={{flexDirection:'row', alignContent:'center'}}>
                    <Text style={{ fontFamily: 'montserrat', fontSize: 14, color: '#9BA5AB', fontWeight: 'bold'}}>PROPINA</Text>
                    <Text style={{fontFamily: 'montserrat', fontSize: 18, marginStart: '47%'}}>$0.00</Text>
                    <Entypo name='plus' size={28} color={'#4AB562'} style={{marginTop: -2, marginStart: 25}}/>
                </View>
            </View>
            <View style={styles.cuadroinferior}>
                <View style={{flexDirection:'row'}}>
                    
                    <MaterialCommunityIcons name="vector-circle" size={17} color={'#4AB562'}/>
                    <Text style={{fontFamily:'montserrat', marginStart: 7}}>22:42</Text>
                </View>
                <Text style={{fontFamily:'montserrat', fontWeight: 'bold', marginStart: 22 }}>Tu rappi va en camino a tu dirección</Text>
                
            </View>
        </View>
    );
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex:1
    },
    cuadroinferior: {
        position: 'absolute',
        top: '90.5%', //for center align
        alignSelf: 'center',
        backgroundColor: 'white',
        height: Dimensions.get('window').height * 0.086,
        width: Dimensions.get('window').width * 0.95,
        padding: 7,
        borderRadius:10,
        elevation: 3
    },
    cuadromedio: {
        position: 'absolute',
        top: '74%', //for center align
        alignSelf: 'center',
        backgroundColor: 'white',
        height: Dimensions.get('window').height * 0.16,
        width: Dimensions.get('window').width * 0.95,
        padding: 10,
        borderRadius: 10,
        elevation: 3
        
    }, image: {
        width: 50, height: 50,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 4
    },
    separatorLine: {
        marginHorizontal: '1%',
        width: '100%',
        backgroundColor: 'grey',
        margin: StyleSheet.hairlineWidth,
        marginTop: 10,
        marginBottom: 10
    },
    textgris: { fontFamily: 'montserrat', color: 'grey', },
    cuadrosuperior: {
        position: 'absolute',
        top: '65%', //for center align
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.4,
        borderRadius: 15,
        padding: 15,
        paddingTop: 15,
        paddingLeft: 19,
        right: '2.5%',
        elevation: 3
    }, 
    boton:{
        position: 'absolute',
        top: '20%', //for center align
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width * 0.1,
        borderRadius: 30,
        padding: 5,
        
        right: '2.5%'
    },
    soporte:{
        position: 'absolute',
        top: '5%', //for center align
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width * 0.25,
        borderRadius: 30,
        padding: 5,
        flexDirection:'row',

        right: '2.5%'
    }
});
