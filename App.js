
import React from 'react';
import AuthNavigator from './Components/Navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native'


export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

