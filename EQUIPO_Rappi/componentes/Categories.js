import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const items = [
    {
        image: require("../assets/hamburguesa.png"),
        text: "Restaurantes",
    },
    {
        image: require("../assets/farmacia.png"),
        text: "Farmacias",
    },
    {
        image: require("../assets/licor.png"),
        text: "Licores",
    },
    {
        image: require("../assets/mascota.png"),
        text: "Mascotas",
    },
    
];
const items2 =[
    {
        image: require("../assets/marker.png"),
        text: "Super"
    },
    {
        image: require("../assets/express.png"),
        text: "Express",
    },
    {
        image: require("../assets/tienda.png"),
        text: "Tiendas",
    },
    {
        image: require("../assets/repartidor.png"),
        text: "Rappi",
    },
]

export default function Categories(props) {
    const redirect = () => {
        props.navigation.navigate("Restaurantes");
    }
    return (
        <View
            style={{
                marginTop: 5,
                backgroundColor: "#fff",
                paddingVertical: 10,
                paddingLeft: 20,
            }}
        >   
            <View style={{flexDirection: 'row', justifyContent:'space-between', marginBottom: 15, marginEnd: 5}}>
                <Text style={{ fontFamily: 'montserrat-bold', color: 'gray', fontSize: 16}}>Secciones</Text>
                <TouchableOpacity style={{marginEnd: 15}}>
                    <Text style={{ fontFamily: 'montserrat-bold', color: '#44C487', fontSize: 12, marginTop: 4 }}>Ver todos</Text>
                </TouchableOpacity>
                
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: "center", marginRight: 20, marginBottom: 10}}>
                        <TouchableOpacity style={{ alignItems: "center", height: 70, width: 80, }}>
                            <Image
                                source={item.image}
                                style={{
                                    width: 50,
                                    height: 40,
                                    resizeMode: "contain",
                                
                                }}
                            />
                            <Text style={{ fontSize: 13, fontWeight: "200" }}>{item.text}</Text>
                        </TouchableOpacity>
                       
                        
                    </View>
                    
                ))}
               
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items2.map((item, index) => (
                    <View key={index} style={{ alignItems: "center", marginRight: 20, marginBottom: 10,}}>
                        <TouchableOpacity style={{ alignItems: "center", height: 70, width: 80, }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "contain",
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: "200" }}>{item.text}</Text>
                            </TouchableOpacity>
                    </View>

                ))}

            </ScrollView >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, }}>
                <Text style={{ fontFamily: 'montserrat-bold', color: '#FF3A1D', fontSize: 34}}>Restaurantes</Text>
                <TouchableOpacity style={{ marginTop: 18, marginEnd: 15 }} onPress={redirect}>
                    <Text style={{ fontFamily: 'montserrat-bold', color: '#FF3A1D', fontSize: 12, marginTop: 4 }}>Ver todos</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    );
}
