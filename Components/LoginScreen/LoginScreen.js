import React, {useState} from 'react'
import { View, Text, ImageBackground, TouchableHighlight , TextInput} from 'react-native'
import {styles} from '../WelcomeScreen/WelcomeStyles'
import {logoStyle,RegStyles,square} from '../RegisterScreen/RegisterStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import RegLogButton from '../RegisterScreen/RegLogButton'
import {Login} from './LoginStyles'
import AppTextInput from '../TextInput/AppTextInput'
import * as yup from 'yup';
import {Formik} from 'formik'
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

let schema = yup.object().shape({
    
    username: yup.string().required(),
    password: yup.string().required()
   
  });

const users=[
      {
          username:'John Jones',
          email:'jojo@g.com',
          password:'pass'
      },
      {
        username:'Billy Bat',
        email:'Billy@g.com',
        password:'pass4'
    }

];

const validateUser = ({username, password}) => {
    return(
        users.filter((user) => user.username === username && user.password === password).length>0
    );
};

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

                            <Formik
                                initialValues={{email:'', password:'',username:''}}
                                onSubmit = {(values, {resetForm})=> {
                                    if(validateUser(values)){   
                                        resetForm();
                                        navigation.navigate('account', {
                                            screen: 'account',
                                            param:{
                                                screen:'account',
                                                param:{
                                                    paramName: values.username
                                                },
                                            }
                                        }
                                        );
                                        // createUser(values);
                                    }
                                    else{
                                        resetForm();
                                        alert("Invalid Login Details")
                                    }
                                }}
                                validationSchema={schema}
                            >

                                {({handleChange, handleSubmit, errors, setFieldTouched, touched, values}) =>(
                                    <>
                                    <AppTextInput 
                                    description='Name:' 
                                    clearTextOnFocus={true}
                                    onChangeText = {handleChange('username')}
                                    onBlur={()=> setFieldTouched('username')}
                                    value = {values.username}
                                    />
                                    {touched.username && <Text style={{color:'#fff', fontSize:15}}>{errors.username}</Text>}
                                    <AppTextInput 
                                    description='Password:' 
                                    secureTextEntry={true}
                                    clearTextOnFocus={true}
                                    onChangeText = {handleChange('password')}
                                    onBlur={()=> setFieldTouched('password')}
                                    value = {values.password}
                                    />
                                     { touched.password && <Text style={{color:'#fff', fontSize:15}}>{errors.password}</Text>}
                                    <RegLogButton title='Login' 
                                    onPress={ handleSubmit}
                                    />
                                    </>
                                    
                                )}

                            </Formik>

                            {/* <AppTextInput 
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
                            /> */}
                        </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen
