import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Icon() {
    return (
        <View>
            <Image source={require('../assets/header.png')} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 60,
        resizeMode: 'contain',
    }
})