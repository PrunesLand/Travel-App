import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function LogOffButton({title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:310,
        height:81,
        backgroundColor:'#2D6A4F',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        borderRadius:15,
        borderWidth: 5,
        borderColor: '#1B4332',
    },
    text:{
        fontSize:45,
        color:'#FF4141'
    }
})