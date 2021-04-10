import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native'
import { account} from '../AccountScreen/AccountStyles'
import { info, description  } from './InfoStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const InfoHeader = () => {
    return(
        <View style={account.header}>
            {/* <TouchableHighlight>
            <MaterialCommunityIcons
            name='close'
            size={45}
            color='#fff'
            />
            
            </TouchableHighlight> */}
        </View>
    )
}

const InfoHero = () => {
    return(
        <View style={info.HeroContainer}>
            <ImageBackground 
            style={info.hero}
            source={require('../Images/sydney.jpg')}/>
            <View style={info.textContainer}>
                
                    <Text style={info.titleText}>Activities in </Text>
                    <View style={info.setDate}>
                        <Text>set Date</Text>
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

const SetLocation = () => {
    return(
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
            <Text>Set location</Text>
        </View>
    )
}

const Description = () => {
    return(
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
            <Text>Set Description</Text>
        </View>
    )
}

export default function InfoScreen() {

    return (
        <View style={account.background}>
            <InfoHeader/>
            <InfoHero/>
            <SetLocation/>
            <Description/>
        </View>
    )
}




