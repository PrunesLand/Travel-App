import {StyleSheet} from 'react-native'
import React from 'react';

export const info = StyleSheet.create({
    titleText:{
        fontSize:40,
        color:'#FFF',
        textAlign:'center',
        left:100,
        top:60
    },
    HeroContainer:{
        height:200,
        textAlign:'center',
        backgroundColor:'#2D6A4F'
    },
    hero:{
        flex:1,
        height:200,
        opacity:0.5
    },
    textContainer:{
        flex:1,
        display:'flex',
        position:'absolute',
        alignSelf:'stretch',
        height:200,
        alignItems:'center',
        
    },
    setDate:{
        display:'flex',
        flexDirection:'row',
        height:5,
        top:95,
        left:100,
        alignItems:'center'
    },
    locationContainer:{
        height:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:5,
        borderColor:'#FFF'
        
    },
    locationTitle:{
        display:'flex',
        flexDirection:'row',
        bottom:10
    },
    locationTitleText:{
        fontSize:25,
        width:120,
        textAlign:'center'
    },
    textInput:{
        color:'#000',
        fontSize:20,
        height:30,
        width:100
    },
    location:{
        height:30,
        width:120,
        color:'#000',
        textAlign:'center',
        fontSize:20
    },
    descriptionText:{
        height:120,
        width:'100%',
        paddingLeft:15
    }
})

export const description = StyleSheet.create({
    header:{
        height:50,
        display:'flex',
        flexDirection:'row',
        padding:10
    },
    title:{
        fontSize:20
    }
})