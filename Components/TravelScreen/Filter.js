import React , {useState}from 'react'
import { View, Text, FlatList, TouchableOpacity,  Modal, Button } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {travel,filter, add, list} from './TravelStyles'
import { account } from '../AccountScreen/AccountStyles'
import { categories } from './TravelScreen'
categories
export default function Filter({placeholder, onSelectedItem, selectedItem}) {
    const [modalVisible, setModalVisible] = useState(false);

    const RenderItem = ({label, onPress}) => (

        <View style={filter.itemContainer}>
            <TouchableOpacity onPress={onPress}>
                <Text style={filter.itemText}>{label}</Text>
            </TouchableOpacity>
        </View>
    )

    return(
        <View style={filter.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={filter.wrapper}>
                    <Text style={filter.categoryText}>{selectedItem? selectedItem.label: placeholder}</Text>
                    <MaterialCommunityIcons
                    name='chevron-down' 
                    size={24}
                    />
                </View>
            </TouchableOpacity>
            <Modal visible={modalVisible} animationType='slide'>
                <View style={account.background}>
                    <Button title='close' onPress={()=> setModalVisible(false)}/>
                    <FlatList
                        data={categories}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) =>
                        <RenderItem
                        label = {item.label}
                        onPress={()=>{
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
