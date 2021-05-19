import { StyleSheet } from 'react-native'
import React from 'react';

export const travel = StyleSheet.create({
    listContainer: {
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItem: {
        height: 100,
        padding: 50,
        flex: 1

    },
    renderItems: {

        height: 65,
        flex: 1

    },
    travelHeader: {

        height: 80,
        backgroundColor: '#2D6A4F',
        display: 'flex',
        flexDirection: 'row'

    },
    back: {

        height: 60,
        top: 15,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center'
    },
    account: {

        height: 60,
        position: 'absolute',
        left: 45,
        top: 15,
        display: 'flex',
        justifyContent: 'center'
    },
    headerTextContainer: {
        flex: 1,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 40,
        textAlign: 'center'
    },
    deleteView: {
        width: 75,
        backgroundColor: '#FFF'
    },
    separator: {
        height: 20,
        width: 100,
        backgroundColor: '#FFF'
    }
})

export const list = StyleSheet.create({
    separator: {
        height: 20,
        width: '100%',


    }
})

export const filter = StyleSheet.create({
    container: {

        height: 60,
        backgroundColor: '#B7E4C7',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20
    },
    itemContainer: {
        height: 50,
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center'
    },
    categoryText: {
        fontSize: 20
    }
})

export const add = StyleSheet.create({
    buttonContainer: {
        height: 50,
        width: 90,
        backgroundColor: '#2D6A4F',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 5,
        borderColor: '#1B4332',
        left: 150,

    },
    container: {
        height: 250,
        display: 'flex',
        justifyContent: 'center'
    },
    modalContainer: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },
    textInput: {
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputTitle: {
        top: 30,
        fontSize: 20
    },
    listContainer: {
        width: '100%',
        height: 200,
        display: 'flex',
        alignItems: 'center'
    },
    listContainerText: {
        height: 50,
        width: '100%',
        fontSize: 20,
        textAlign: 'center',
        top: 15
    },
    plusContainer: {
        width: '100%',
        height: 80,
        display: 'flex',
        alignItems: 'center'
    }
})