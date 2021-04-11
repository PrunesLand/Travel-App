import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../AccountScreen/AccountScreen';
import TravelScreen from '../TravelScreen/TravelScreen';
import InfoScreen from '../InformationScreen/InfoScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons'



const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator         
    tabBarOptions={
      {
        style: {backgroundColor: '#B7E4C7'},
        labelStyle:{fontSize:13},
        activeTintColor: '#000',
        inactiveTintColor: '#2D6A4F',
        activeBackgroundColor: '#2D6A4F'
        
      }}>
        <AppTab.Screen name="account" component={AccountScreen} options={{tabBarIcon: () => 
        <MaterialCommunityIcons
        name='account'
        size={30}
        color='#fff'
        />
        }}/>
        <AppTab.Screen name="travel" component={TravelScreen} options={
          {
            tabBarIcon: () => 
            <MaterialCommunityIcons
            name='airplane'
            size={30}
            color='#fff'
            />
          }}/>
        <AppTab.Screen name="info" component={InfoScreen} options={
          {
            tabBarIcon: () => 
            <MaterialCommunityIcons
            name='information-outline'
            size={30}
            color='#fff'
            />
          }}/>
    </AppTab.Navigator>
)

export default TabNavigator;