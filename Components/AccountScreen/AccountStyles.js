import {StyleSheet} from 'react-native'

export const account = StyleSheet.create({
    header:{
        // height:'10vh',
        // width:'100%',
      
        height:80,
        backgroundColor:'#2D6A4F',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        
    },
    headerText:{
        textAlign:'center',
        color:'#fff',
        fontSize:40, 
    },
    username:{
        // height:'25vh',
        // width:'100%',

        flex:1,
        height: 40,
        display:'flex',
        textAlign:'center',
        alignContent:'center',
        justifyContent:'center'
    },
    userText:{
        fontSize:30,
        color:'#2D6A4F',
    
    },  
    buttonContainer:{
        // height:'50vh',
        // width:'100%',
        flex:1,
        height:40,
        display:'flex',
        justifyContent:'flex-start',
        textAlign:'center',
        alignItems:'center',
       
    },
    logoffContainer:{
        // height:'15vh',
        // width:'100%',
        flex:1,
        height:15,
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        
        
    },
    background:{
        flex:1,
        backgroundColor:'#B7E4C7'
    }
    
    
})