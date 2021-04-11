import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({title, color, onPress}) {
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
        width:309,
        height:60,
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
        fontSize:30,
        color:'#fff',
        padding: 15,
        textAlign:'center'
        
    }
})
