import React from 'react'
import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function Item({city, onPress, onSwipeLeft}) {
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
            <TouchableOpacity onPress={onPress}>
                <View style={item.container} >
                    <Text style={item.text}>{city}</Text>
                </View> 
            </TouchableOpacity>
        </Swipeable>
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
        borderWidth:6,
        left:30,
        
        

    },
    text:{
        fontSize:20,
        color:'#fff'
    }
})
