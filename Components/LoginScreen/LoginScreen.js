import React, {useState} from 'react'
import { View, Text, ImageBackground, TouchableHighlight , TextInput} from 'react-native'
import {styles} from '../WelcomeScreen/WelcomeStyles'
import {logoStyle,RegStyles,square} from '../RegisterScreen/RegisterStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import RegLogButton from '../RegisterScreen/RegLogButton'
import {Login} from './LoginStyles'
import AppTextInput from '../TextInput/AppTextInput'
// import {useNavigation} from '@react-navigation/native'


// export const LoginExit = ({onPress}) => {
//     return(
        
//         <View style={RegStyles.closeContainer}>
//         <TouchableHighlight onPress={onPress}>
//             <MaterialCommunityIcons
//             name='close'
//             style={RegStyles.close}
//             />
//         </TouchableHighlight>
//         </View>
//     )
// }

const LoginScreen = ({navigation}) => {

    

    return (
        <View style={styles.container}>
            <ImageBackground 
            source={require("../Images/backgroundImg.jpg")}
            style={styles.background}
            />
            {/* <LoginExit 
            onPress={() => navigation.goBack()}
            /> */}
            <View style={styles.content}>
                {/* <View style={Login.logoContainer}>
                    <View style={styles.Logo}>
                        <MaterialCommunityIcons 
                            name='airplane'
                            size={130}
                            color='#fff'
                            />
                    </View>
                </View> */}
                
                <View style={Login.LoginContainer}>
                        <View style={Login.square}>
                            <Text 
                            style={RegStyles.title}
                            >Login</Text>
                            <AppTextInput 
                            description='Name:' 
                            clearTextOnFocus={true}
                            />
                            <AppTextInput 
                            description='Password:' 
                            secureTextEntry={true}
                            clearTextOnFocus={true}
                            />
                            <RegLogButton title='Login' 
                            onPress={() => navigation.navigate('account')}
                            />
                        </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen
