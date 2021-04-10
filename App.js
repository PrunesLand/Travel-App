import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './Components/AccountScreen/AccountScreen';
import InfoScreen from './Components/InformationScreen/InfoScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen'
import RegisterScreen from './Components/RegisterScreen/RegisterScreen'
import TravelScreen from './Components/TravelScreen/TravelScreen';
import AuthNavigator from './Components/Navigation/AuthNavigation';
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './Components/Navigation/TabNavigator';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>tst</Text>
    // </View>
    <NavigationContainer>
     <TabNavigator/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
