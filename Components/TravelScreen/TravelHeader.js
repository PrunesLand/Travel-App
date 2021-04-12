import React from 'react'
import { View, Text } from 'react-native'
import {travel,filter, add, list} from './TravelStyles'

export default function TravelHeader() {
    return(
        <View style={travel.travelHeader}>
                <View style={travel.headerTextContainer}>
                    <Text style={travel.headerText}>Travels</Text>
                </View>
        </View>
    )
}
