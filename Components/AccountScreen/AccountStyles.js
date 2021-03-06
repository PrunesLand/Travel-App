import { StyleSheet } from 'react-native'
import React from 'react';
export const account = StyleSheet.create({
    header: {


        height: 80,
        backgroundColor: '#2D6A4F',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',

    },
    headerText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 40,
    },
    username: {

        flex: 1,
        height: 40,
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    userText: {
        fontSize: 30,
        color: '#2D6A4F',
        textAlign: 'center'

    },
    buttonContainer: {

        flex: 1,
        height: 40,
        display: 'flex',
        justifyContent: 'flex-start',
        textAlign: 'center',
        alignItems: 'center',

    },
    logoffContainer: {

        flex: 1,
        height: 15,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',


    },
    background: {
        flex: 1,
        backgroundColor: '#B7E4C7'
    }


})