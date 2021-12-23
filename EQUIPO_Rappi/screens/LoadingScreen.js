import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const LoadingScreen = props =>{
    return (
        <View style={styles.errorContainer}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );
}

export default LoadingScreen;
const styles = StyleSheet.create({
    errorContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
