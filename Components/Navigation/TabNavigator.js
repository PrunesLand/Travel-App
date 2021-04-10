import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../AccountScreen/AccountScreen';
import TravelScreen from '../TravelScreen/TravelScreen';
import InfoScreen from '../InformationScreen/InfoScreen';



const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator         
    tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#2D6A4F'
      }}>
        <AppTab.Screen name="account" component={AccountScreen} />
        <AppTab.Screen name="travel" component={TravelScreen} />
        <AppTab.Screen name="info" component={InfoScreen} />
    </AppTab.Navigator>
)

export default TabNavigator;