import React from 'react';
import { StyleSheet, View, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const BannerProducts = (props) => {
    
    return (
        <View style={{flex: 1, alignItems:'center'}}>
            <ImageBackground resizeMode='cover'
                style={{
                    width: 450, height: 200, flex: 1,
                }}
                source={{
                    uri:
                        "https://dam.cocinafacil.com.mx/wp-content/uploads/2020/04/comida-china-tipica.jpg",

                }}
                blurRadius={20}
            />
            <View style={{ flexDirection: 'row', height:'100%', marginTop: 10}}>
               
                <View style={styles.caja}>
                    <TextInput
                        style={styles.input}
                        placeholder="Buscar en rappi..."
                        keyboardType="default"
                    />
                    <TouchableOpacity style={styles.botonaranja}>
                        <AntDesign name="search1" size={17} color={"white"}></AntDesign>
                    </TouchableOpacity>
                </View>
                
            </View> 
            {/*
            <Image style={{
                width: '30%',
                height: '30%',
                borderRadius: 30,
                resizeMode: 'cover',
                marginTop: '0%',}}
                source={{ uri: "https://cdn.donmai.us/original/c7/a5/__hilgendorf_s_tube_nose_bat_kemono_friends_drawn_by_dnsdltkfkd__c7a5b4baf9263b0994f555e6ddad568e.jpg", }} />
            <Text style={{ color: 'black', fontSize: 20, flex: 1 }}>nada</Text>
            
            */}
            
        </View>
     
    );
}
export default BannerProducts;
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "84%",

        padding: 10,

        borderRadius: 10
    },
  
    caja: {
        backgroundColor: '#eee',
        borderRadius: 15,
        height: 43,
        width: "98%",
        flexDirection: 'row',

    },
    botonaranja: {
        backgroundColor: '#FE5339',
        height: 35,
        width: 35,
        borderRadius: 13,
        marginTop: 4,
        marginRight: 0,
        padding: 7,
        paddingLeft: 9,
       
        

    }
});
