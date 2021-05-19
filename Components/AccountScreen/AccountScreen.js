import React from 'react'
import { View, Text } from 'react-native'
import { account } from './AccountStyles'
import Button from './Button'
import LogOffButton from './LogOffButton'


export default function AccountScreen({ navigation, route }) {
    return (
        <View
            style={account.background}
        >
            <View
                style={account.header}
            >
                <Text
                    style={account.headerText}
                >Account</Text>
            </View>
            <View
                style={account.username}
            >
                <Text
                    style={account.userText}
                // Each user will have their name displayed here for every successful login
                >Hi, {route.params.paramName}! </Text>
            </View>
            <View
                style={account.buttonContainer}
            >
                <Button title='Travel'
                    // Users will have the option to either navigate to the information screen with this button or through the tab navigator below.
                    onPress={() => navigation.navigate('travel')}
                />
            </View>

            <View
                style={account.logoffContainer}
            >
                <LogOffButton title='Log off'
                    // This screen logs the user off and takes the user to the welcome screen.
                    onPress={() => navigation.navigate('welcome')}
                />
            </View>
        </View>
    )
}

