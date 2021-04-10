import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../AccountScreen/AccountScreen';
import TravelScreen from '../TravelScreen/TravelScreen';


const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator>
        <AppTab.Screen name="account" component={AccountScreen} />
        <AppTab.Screen name="travel" component={TravelScreen} />
    </AppTab.Navigator>
)

export default TabNavigator;