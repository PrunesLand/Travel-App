import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { regButton } from './RegisterStyles'

// This is a button component that is reused in both the login screen and the register screen.

const RegLogButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={regButton.Button}>
                <Text style={regButton.register}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default RegLogButton
