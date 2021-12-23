import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React  from 'react';
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import { AntDesign, Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import Home from "../screens/Home";
import CartScreen from "../screens/CartScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import Restaurantes from "../screens/Restaurantes";
import Pruebas from "../screens/pruebas";
import { TextInput } from 'react-native-gesture-handler';
import Banner from '../componentes/UI/banner';
import BannerProducts from '../componentes/UI/bannerProducts';
import { ScreenStack } from 'react-native-screens';
import Buscar from '../screens/Buscar';
import Recibo from '../screens/Recibo';
import Mapa from '../screens/Mapa';
import SmsScreen from '../screens/SmsScreen';
import CodigoScreen from '../screens/CodigoScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export const StackNavigator = () => {
    
return (
    
    <NavigationContainer>
        <Stack.Navigator >
            {/*<Stack.screen name={"TabNavigator"} component={TabNavigator}/>*/}
            {/*<Stack.screen name={"ProductDetails"} component={ProductDetailsScreen}/>*/}
            <Stack.Screen name={"Home"}
                component={Home} options={{ headerShown: false }}
                />
            <Stack.Screen name={"SmsScreen"}
            component={SmsScreen}
            />
            <Stack.Screen name={"CodigoScreen"}
                component={CodigoScreen} 
               
            />
            <Stack.Screen name={"TabNavigator"}
                component={TabNavigator}
                options={{
                    headerStyle: { height: 125 }, headerTitle: (props) => <Pruebas {...props} />,
                    headerLeft: false
                }}
                
            />
           
            <Stack.Screen name={"ProductDetails"}
                component={ProductDetailsScreen}
                options={{ 
                    headerStyle: {height: 200}, 
                     headerTitle: (props) => <BannerProducts {...props} />,
                   headerTransparent: true,
                    headerTintColor: "black",
                    //Si quito el header se quita tambien la flecha, importo en el header todo
                   
                 
                   
                    }}
                    style={{flex:1}}
                    
            />
            
            <Stack.Screen name={"Restaurantes"}
                component={Restaurantes}
                options={{ headerStyle: { height: 100 }, 
                headerTitle: (props) => <Banner {...props} />, }}
                
            />
            <Stack.Screen name={"Buscar"}
                component={Buscar}
            />
            <Stack.Screen name={"CartScreen"}
                options={{
                    title: 'Tu canasta'  ,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily:'montserrat-bold',
                        fontSize: 15
                    }
                }}
                component={CartScreen}
                
               
            />
            <Stack.Screen name={"Recibo"}
                component={Recibo}
                options={{
                    title: 'Tu pedido',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'montserrat-bold',
                        fontSize: 15
                    }
                }}   
            />
            <Stack.Screen name={"Mapa"}
                options={{
                    headerShown: false
                }}
                component={Mapa}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
}

const TabNavigator = () => {   //Barra de abajo con iconos
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
            borderRadius: 30,
            marginBottom: 15,
            width: '90%',
            marginLeft: '5%',
            flex: 1,
            position: 'absolute',
            
           
            },
           
        }} 
           >
            <Tab.Screen name="Home" component={HomeScreen} options={{
              headerShown: false,
                tabBarIcon: ({ focused }) => <AntDesign name="home" size={24} color={focused ? "orange" : "grey"}  />
            }} />
           
            <Tab.Screen name="Promos" component={CartScreen} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <FontAwesome5 name="money-check" size={20} color={focused ? "orange" : "grey"} />
            }}
            />
            <Tab.Screen name="Buscar" component={Buscar} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <AntDesign name="search1" size={20} color={focused ? "orange" : "grey"} />
            }}
            />
            <Tab.Screen name="Soporte" component={Pruebas} options={{
                
                tabBarIcon: ({ focused }) => <MaterialIcons name="contact-support" size={24} color={focused ? "orange" : "grey"} />
            }}
            />
            <Tab.Screen name="Mi perfil" component={CartScreen} options={{
                tabBarIcon: ({ focused }) => <Ionicons name="person" size={24} color={focused ? "orange" : "grey"} />
            }}
            />
        </Tab.Navigator>
    )
}
const AddButton = () => {
    return null
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "150%",
        margin: 12,
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 10
    },
});
