import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import { info, description } from './InfoStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Description() {
    return (
        <View>
            <View style={description.header}>
                <Text style={description.title}>Description </Text>
                <TouchableHighlight>
                    <MaterialCommunityIcons
                        name='pencil'
                        size={30}
                        color='#FFF'
                    />
                </TouchableHighlight>
            </View>
            <Text style={info.descriptionText}>Set Description</Text>
        </View>
    )
}
