import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import InfoHero from './InfoHero'
import SetLocation from './SetLocation'
import Description from './Description'

const InfoHeader = () => {
    return (
        <View style={account.header}>
        </View>
    )
}
// This screen displays the values from the clicked item from the travel screen. Values will be passed as parameters into each component below
export default function InfoScreen() {

    return (
        <View style={account.background}>
            <InfoHeader />
            <InfoHero />
            <SetLocation />
            <Description />
        </View>
    )
}




