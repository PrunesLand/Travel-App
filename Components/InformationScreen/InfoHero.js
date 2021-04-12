import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import { info, description } from './InfoStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function InfoHero() {
    return (
        <View style={info.HeroContainer}>
            <ImageBackground
                style={info.hero}
                source={require('../Images/sydney.jpg')} />
            <View style={info.textContainer}>

                <Text style={info.titleText}>Activity name </Text>
                <View style={info.setDate}>
                    <Text style={info.textInput}>Enter Date</Text>
                    <TouchableHighlight>

                        <MaterialCommunityIcons
                            name='pencil'
                            size={40}
                            color='#FFF'
                        />
                    </TouchableHighlight>
                </View>

            </View>
        </View>
    )
}
