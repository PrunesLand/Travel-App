
import {  StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    background: {  
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"  
        
    },
    content:{
        position:'absolute',
        
    },
    titleContainer:{
        // width:'100%',
        // height:'15vh',
       
        left:110,
        top:20,
        alignSelf:'stretch',
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        // paddingTop:5
    },
    title: {
        // fontFamily: 'Roboto Mono',
        
        fontSize: 60,
        textAlign:'center',
        color:'#1B4332',
        alignSelf: 'stretch',
        
        
    },
    square:{
        backgroundColor: 'rgba(45, 106, 79, 0.9)',
        // height:'100%',
        // width: '100%',
        width:380,
        height:350,
        alignItems:'center',
        borderRadius:15,
        display:'flex',
        left:5,
        justifyContent:'space-evenly'
        
    },
    
    bgContainer:{
        // width:'100%',
        // height: '50vh',
        // flex:1,
        height:150,
        width:150,
        top: 190,
        
    },
    textStyle:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        padding:1
    },
    logoContainer: {
        // height:'35vh',
        // width:'100%',
        height:35,
        flex:1,
        left:120,
        top:80,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:5
    },
    Logo:{
        height:160,
        
        backgroundColor:'#2D6A4F',
        borderRadius: 50,
        textAlign: 'center',
        display:'flex',
        // justifyContent:'center',
        // alignContent:'center',
        paddingLeft:5,
        borderWidth:13,
        borderColor:'#1B4332'
    },
    Button:{
        height:80,
        width:341,
        borderRadius:15,
        backgroundColor: '#1B4332',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
    },
    register:{
        fontSize:40,
        color:'#fff'
    }
 
 })