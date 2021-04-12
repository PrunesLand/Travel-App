import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import { info, description } from './InfoStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import InfoHero from './InfoHero'
import SetLocation from './SetLocation'
import Description from './Description'

const InfoHeader = () => {
    return (
        <View style={account.header}>
        </View>
    )
}

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




