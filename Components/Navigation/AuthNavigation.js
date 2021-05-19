import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen'
import LoginScreen from '../LoginScreen/LoginScreen'
import RegisterScreen from '../RegisterScreen/RegisterScreen'
import TravelScreen from '../TravelScreen/TravelScreen';
import TabNavigator from './TabNavigator'


const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name='welcome' component={WelcomeScreen} options={{ headerShown: false }} />
        <AppStack.Screen name='register' component={RegisterScreen} options={{ title: '' }} />
        <AppStack.Screen name='login' component={LoginScreen} options={{ title: '' }} />
        <AppStack.Screen name='travel' component={TravelScreen} />
        <AppStack.Screen name='account' component={TabNavigator} options={{ headerShown: false }} />

    </AppStack.Navigator>
)

export default AuthNavigator;