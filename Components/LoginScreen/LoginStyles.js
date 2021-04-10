import {StyleSheet} from 'react-native'

export const Login = StyleSheet.create({
    loginContainer:{
        // width:'100%',
        // height: '60vh',
        
        
       height:300,
       width:300,
        
    },
    container:{
        flex:1
    },
    logoContainer:{
        flex:1,
        top:25,
        left:15,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',  
        bottom:8
    },
    square:{
        backgroundColor: 'rgba(45, 106, 79, 0.9)',
        
        alignItems:'center',
        borderRadius:15,
        width:370,
        height:350,
        top:100,
        left:10
    }
})