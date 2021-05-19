import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { styles } from '../WelcomeScreen/WelcomeStyles'
import { RegStyles } from '../RegisterScreen/RegisterStyles'
import RegLogButton from '../RegisterScreen/RegLogButton'
import { Login } from './LoginStyles'
import AppTextInput from '../TextInput/AppTextInput'
import * as yup from 'yup';
import { Formik } from 'formik'

// This schema is used to enforce the user to input both fields
let schema = yup.object().shape({

    username: yup.string().required(),
    password: yup.string().required()

});

const users = [
    {
        id: "user1",
        username: 'John Jones',
        email: 'jojo@g.com',
        password: 'pass'
    },
    {
        id: "user2",
        username: 'Billy Bat',
        email: 'Billy@g.com',
        password: 'pass4'
    }

];
// Below is used to check whether the user has made an account before. Once name and password is inputted, it will search through the list and find one object with matching values.
const validateUser = ({ username, password }) => {
    return (
        users.filter((user) => user.username === username && user.password === password).length > 0
    );
};

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../Images/backgroundImg.jpg")}
                style={styles.background}
            />
            {/* This is where the content is structured */}
            <View style={styles.content}>

                <View style={Login.LoginContainer}>
                    <View style={Login.square}>
                        <Text
                            style={RegStyles.title}
                        >Login</Text>

                        <Formik
                            initialValues={{ email: '', password: '', username: '' }}
                            onSubmit={(values, { resetForm }) => {
                                if (validateUser(values)) {
                                    resetForm();
                                    // Below navigation is performing a double jump as it needs to cross from one navigator into the next to pass a parameter value.
                                    navigation.navigate('account', {
                                        screen: 'account',
                                        params: { paramName: values.username }
                                    }
                                    );
                                }
                                else {
                                    resetForm();
                                    alert("Invalid Login Details")
                                }
                            }}
                            validationSchema={schema}
                        >

                            {({ handleChange, handleSubmit, errors, setFieldTouched, touched, values }) => (
                                <>
                                    {/* Below is the structure of the login input  */}
                                    <AppTextInput
                                        description='Name:'
                                        clearTextOnFocus={true}
                                        onChangeText={handleChange('username')}
                                        onBlur={() => setFieldTouched('username')}
                                        value={values.username}
                                    />
                                    {touched.username && <Text style={{ color: '#fff', fontSize: 15 }}>{errors.username}</Text>}
                                    <AppTextInput
                                        description='Password:'
                                        secureTextEntry={true}
                                        clearTextOnFocus={true}
                                        onChangeText={handleChange('password')}
                                        onBlur={() => setFieldTouched('password')}
                                        value={values.password}
                                    />
                                    {touched.password && <Text style={{ color: '#fff', fontSize: 15 }}>{errors.password}</Text>}
                                    <RegLogButton title='Login'
                                        onPress={handleSubmit}
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

export default LoginScreen
