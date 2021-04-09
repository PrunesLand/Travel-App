import {StyleSheet} from 'react-native'

export const RegStyles = StyleSheet.create({
    container:{
        // width:'100%',
        // height: '70vh',
        flex:1,
        height:60,
        position: 'absolute',
        top: 20,
        padding: 3
    },
    title:{
        fontSize:40,
        color:'#fff'
    },
    close:{
        fontSize:80,
        color:'#FFF',
        
    },
    closeContainer:{
        zIndex:10,
        position:'absolute',
        top:20
    }
})

export const logoStyle = StyleSheet.create({
    container:{
        // height:'35vh',
        // width:'100%',
        flex:1,
        top:85,
        left:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',  
        bottom:8
        
    },
})

export const square = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(45, 106, 79, 0.9)',
        
        alignItems:'center',
        borderRadius:15,
        width:370,
        height:450,
        top:270,
        left:10
    }
})

export const regButton = StyleSheet.create({
    Button:{
        height:60,
        width:200,
        borderRadius:15,
        backgroundColor: '#1B4332',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    register:{
        fontSize:20,
        color:'#fff'
    }
})