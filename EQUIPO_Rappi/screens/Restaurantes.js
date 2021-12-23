import React from 'react';
import { StyleSheet, View, FlatList, Button, Text, Dimensions } from "react-native";
import { PRODUCTS } from "../dummy-data/data";
import RestaurantCard from "../componentes/RestaurantCard";

const Restaurantes = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.listcontainer}>
                
            
                <FlatList
                    data={PRODUCTS}
                    style={styles.container} //nuevo
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={itemData => (
                        
                        <RestaurantCard {...props} productInfo={itemData.item}
                        />
                    )}
                    ListHeaderComponent={<Text style={{ fontFamily: 'montserrat-bold', color: 'black', fontSize: 22, marginBottom: 20}}>Recomendados para ti</Text>}
                />
                 
            </View>
        </View>
        /*
        <FlatList
            data={[{ name: 'a' }, { name: 'b' }, {name: 'sale'}]}
            renderItem={
                ({ item }) => <Text>{item.name}</Text>
            }
            keyExtractor={(item, index) => index.toString()}
        />
        )*/
    )
}
export default Restaurantes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

    listcontainer: {
        height: Dimensions.get('window').height * 0.925,
        width: '100%'

    }
});
