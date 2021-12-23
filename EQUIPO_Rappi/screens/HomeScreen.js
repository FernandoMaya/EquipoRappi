import React from 'react';
import { StyleSheet, View, FlatList, Button, Text, Dimensions } from "react-native";
import { PRODUCTS } from "../dummy-data/data";
import ProductCard from "../componentes/ProductCard";
import Categories from "../componentes/Categories";

const HomeScreen = (props) => {
   
    return (
        <View style={styles.container}>
            
            <View style={styles.listcontainer}>
               
                
               
                <FlatList
                    data={PRODUCTS}
                    style={styles.container} //nuevo
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={itemData => (
                        <ProductCard {...props} productInfo={itemData.item}
                        />
                    )}
                    ListHeaderComponent={<Categories {...props} />}
                  
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
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
    
    },

    listcontainer:{
        height: Dimensions.get('window').height * 0.90,
        width: '100%',
        
        //agregar el flex
        
    }
});
