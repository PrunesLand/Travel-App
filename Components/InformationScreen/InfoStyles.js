import {StyleSheet} from 'react-native'


export const info = StyleSheet.create({
    titleText:{
        fontSize:40,
        color:'#FFF',
        textAlign:'center',
        left:100,
        top:60
    },
    HeroContainer:{
        // height:'30vh',
        // width:'100%',
        height:200,
        textAlign:'center',
        backgroundColor:'#2D6A4F'
    },
    hero:{
        // width:'100%',
        // height:'30vh',
        flex:1,
        height:200,
        opacity:0.5
    },
    textContainer:{
        // height:'100%',
        // width:'100%',
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
        // height:'12vh',
        // width:'100%',
        flex:1,
        height:12,
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
        fontSize:25
    }
})

export const description = StyleSheet.create({
    header:{
        // width:'100%',
        // height:'5vh',
        flex:1,
        height:5,
        display:'flex',
        flexDirection:'row',
        padding:10
    },
    title:{
        fontSize:20
    }
})