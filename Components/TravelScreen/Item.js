import React from 'react'
import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'

export default function Item({city}) {
    return (
        <TouchableOpacity>
            <View style={item.container}>
                <Text style={item.text}>{city}</Text>
            </View>
        </TouchableOpacity>
    )
}

const item = StyleSheet.create({
    container:{
        height:55,
        width:329,
        backgroundColor:'#2D6A4F',
        borderRadius:15,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#1B4332',
        borderWidth:6

    },
    text:{
        fontSize:20,
        color:'#fff'
    }
})
