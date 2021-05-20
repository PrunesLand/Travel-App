import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Modal, Button } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import TravelHeader from './TravelHeader'
import { travel, filter, add, list } from './TravelStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Formik, Field } from 'formik'
import AppTextInput from '../TextInput/AppTextInput'
import Item from './Item'
export const Data = [
    {
        id: '1',
        title: 'Surfing',
        category: 'Activity',
        date: '10/04/21',
        location: 'bondi',
        description: 'surf at the beach'
    },
    {
        id: '2',
        title: 'Opera house',
        category: 'Visit',
        date: '11/04/21',
        location: 'city',
        description: 'take pictures of opera house'
    },
    {
        id: '3',
        title: 'Sushi',
        category: 'Food',
        date: '12/04/21',
        location: 'chatswood',
        description: 'eat sushi'
    },
]

export const categories = [
    {
        label: 'Activity',
        value: 1
    },
    {
        label: 'Food',
        value: 2
    },
    {
        label: 'Visit',
        value: 3
    }

]

const Filter = ({ placeholder, onSelectedItem, selectedItem }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const RenderItem = ({ label, onPress }) => (

        <View style={filter.itemContainer}>
            <TouchableOpacity onPress={onPress}>
                <Text style={filter.itemText}>{label}</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={filter.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={filter.wrapper}>
                    <Text style={filter.categoryText}>{selectedItem ? selectedItem.label : placeholder}</Text>
                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={24}
                    />
                </View>
            </TouchableOpacity>
            <Modal visible={modalVisible} animationType='slide'>
                <View style={account.background}>
                    <Button title='close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={categories}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) =>
                            <RenderItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectedItem(item)
                                }}
                            />
                        }
                    />
                </View>
            </Modal>

        </View>
    )
}

const List = ({ onPress }) => {

    // This stores a copy of Data to display updated items
    const [travel, setTravel] = useState(Data)
    // This handles the deletion of items when swiped. It takes the copied data and filters it and then sets it to update the item list 
    const handleDelete = (travels) => {
        const newDataList = travel.filter(item => item.id !== travels.id);
        setTravel(newDataList);
    }

    const RenderItem = ({ item, onPress }) => (
        <View style={travel.listItem}>
            <Item
                city={item.title}
                onPress={onPress}
                // This is a swipe function that returns a view to display trash icon for item deletion
                onSwipeLeft={() =>
                    <View style={travel.deleteView}>
                        <TouchableOpacity onPress={() => handleDelete(item)}>
                            <MaterialCommunityIcons
                                name='trash-can'
                                size={35}
                                color='#000'
                            />
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    )

    return (
        <View style={travel.listContainer}>
            <FlatList
                data={travel}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <RenderItem item={item} onPress={onPress} />}
                ItemSeparatorComponent={() =>
                    <View style={list.separator} />
                }
            />
        </View>
    )
}

const AddList = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const RenderItem = ({ label, onPress }) => (

        <View style={filter.itemContainer}>
            <TouchableOpacity onPress={onPress}>
                <Text style={filter.itemText}>{label}</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={add.container}>
            {/* Below is the structure of the add button. When pressed,  it will display the modal below */}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={add.buttonContainer}>
                    <Text style={{ color: '#fff' }}>Add</Text>
                    <MaterialCommunityIcons
                        name='plus'
                        size={25}
                        color='#fff'
                    />
                </View>
            </TouchableOpacity>

            {/* This is the modal for when the add button is pressed. It will display a formik which allows data to be entered and then later displayed to the screen */}
            <Modal visible={modalVisible} animationType='slide'>
                <View style={account.background}>
                    <Button title='close' onPress={() => setModalVisible(false)} />

                    <Formik
                        initialValues={{
                            id: '4',
                            title: '',
                            category: '',
                            date: '12/04/21',
                            location: 'chatswood',
                            description: 'eat sushi'
                        }}
                        onSubmit={values => console.log(values)}
                        style={add.modalContainer}
                    >
                        {({ handleChange, handleSubmit }) => (

                            <>
                                <View style={add.textInput}>
                                    <Text style={add.textInputTitle}>Enter Title:</Text>
                                    <AppTextInput
                                        placeholder='title'
                                        onChangeText={handleChange('title')}
                                    />
                                </View>
                                <View style={add.listContainer}>
                                    <Text style={add.listContainerText}>Select Category:</Text>
                                    <FlatList
                                        data={categories}
                                        keyExtractor={item => item.value.toString()}
                                        renderItem={({ item }) =>
                                            <RenderItem
                                                label={item.label}
                                                onPress={handleChange('category')}
                                            />
                                        }
                                    />

                                </View>
                                <View style={add.plusContainer}>
                                    <TouchableOpacity onPress={handleSubmit}>
                                        <View>
                                            <MaterialCommunityIcons
                                                name='plus'
                                                size={55}
                                                color='#2D6A4F'
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}

                    </Formik>

                </View>
            </Modal>
        </View>
    )
}

const TravelScreen = ({ navigation }) => {
    const [category, setCategory] = useState()

    return (
        <View style={account.background}>
            <TravelHeader />
            <Filter
                placeholder='All'
                selectedItem={category}
                onSelectedItem={item => setCategory(item)}
            />
            <List
                onPress={() => navigation.navigate('info')}
            />
            <AddList />

        </View>
    )
}

export default TravelScreen
