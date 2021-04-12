import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import { info, description } from './InfoStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function SetLocation() {
    return (
        <View style={info.locationContainer}>
            <View style={info.locationTitle}>
                <Text style={info.locationTitleText}>Location: </Text>
                <TouchableHighlight>
                    <MaterialCommunityIcons
                        name='pencil'
                        size={30}
                        color='#FFF'
                    />
                </TouchableHighlight>
            </View>
            <Text style={info.location}>Set location</Text>
        </View>
    )
}
