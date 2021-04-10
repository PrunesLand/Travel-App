import React from 'react'
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native'
import {styles} from '../WelcomeScreen/WelcomeStyles'
import {logoStyle,RegStyles,square} from './RegisterStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppTextInput from '../TextInput/AppTextInput'
import RegLogButton from './RegLogButton'
import {Formik} from 'formik'
import * as yup from 'yup';
import { color } from 'react-native-reanimated'

let schema = yup.object().shape({
    
    username: yup.string().required().min(4),
    password: yup.string().required().min(3).max(8),
    email: yup.string().required().email()
   
  });




const RegisterExit = ({onPress}) => {
    return(
        
        <View style={RegStyles.closeContainer}>
        <TouchableHighlight onPress={onPress}>
            <MaterialCommunityIcons
            name='close'
            style={RegStyles.close}
            />
        </TouchableHighlight>
        </View>
    )
}

const RegisterScreen = ({navigation}) => {

    // const [password, setPassword] = useState();
    // const [username, setUsername] = useState();
    // const [email, setEmail] = useState();

    return (
        <View style={styles.container}>
            <ImageBackground 
            source={require("../Images/backgroundImg.jpg")}
            style={styles.background}
            />
            {/* <RegisterExit 
            navigation={() => navigation.goBack()}
            /> */}
            <View style={styles.content}>
                {/* <View style={logoStyle.container}>
                    <View style={styles.Logo}>
                        <MaterialCommunityIcons 
                            name='airplane'
                            size={130}
                            color='#fff'
                            />
                    </View>
                </View> */}
                <View style={RegStyles.container}>
                        <View style={square.container}>
                        <Text style={RegStyles.title}>Register</Text>
                            <Formik
                                initialValues={{email:'', password:'',username:''}}
                                onSubmit = {values => console.log(values)}
                                validationSchema={schema}
                            >
                                {({handleChange, handleSubmit, errors, setFieldTouched, touched}) =>(

                                    <>
    
                                        <AppTextInput 
                                        description='Name:'
                                        onChangeText = {handleChange('username')}
                                        onBlur={()=> setFieldTouched('username')}
                                        />
                                        
                                        {touched.username && <Text style={{color:'#fff', fontSize:15}}>{errors.username}</Text>}

                                        <AppTextInput 
                                        description='Email:' 
                                        keyboardType='email-address'
                                        onChangeText = {handleChange('email')}
                                        onBlur={()=> setFieldTouched('email')}
                                        />
                                        {touched.email && <Text style={{color:'#fff', fontSize:15}}>{errors.email}</Text>}

                                        <AppTextInput 
                                        description='Password:'
                                        secureTextEntry={true}
                                        onChangeText = {handleChange('password')}
                                        onBlur={()=> setFieldTouched('password')}

                                        />
                                        { touched.password && <Text style={{color:'#fff', fontSize:15}}>{errors.password}</Text>}

                                        <RegLogButton title='Register' 
                                        onPress={
                                            handleSubmit
                                        }
                                        />
                                    </>

                                )}
                                    

                                


                            </Formik>


                            
                            

                           
                            
                        </View>
                </View>
            </View>
        </View>
    )
}

export default RegisterScreen
