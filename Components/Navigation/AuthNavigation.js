import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen'
import LoginScreen from '../LoginScreen/LoginScreen'
import RegisterScreen from '../RegisterScreen/RegisterScreen'
import TravelScreen from '../TravelScreen/TravelScreen';  
import InfoScreen from '../InformationScreen/InfoScreen';
import AccountScreen from '../AccountScreen/AccountScreen';


const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name='welcome' component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name='register' component={RegisterScreen} />
        <AppStack.Screen name='login' component={LoginScreen} />
        <AppStack.Screen name='travel' component={TravelScreen} />
        <AppStack.Screen name='info' component={InfoScreen} />
        <AppStack.Screen name='account' component={AccountScreen} options={{headerShown:false}} />
        
    </AppStack.Navigator>
)

export default AuthNavigator;