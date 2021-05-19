import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { textBox } from './TextInputStyles'


// This is a reusable text input
const AppTextInput = ({ description, ...otherProps }) => {
    return (
        <View style={textBox.container}>
            <Text style={textBox.text}>{description}</Text>
            <TextInput style={textBox.textInput} {...otherProps} />
        </View>
    )
}

export default AppTextInput
