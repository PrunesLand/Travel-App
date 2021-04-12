import React , {useState}from 'react'
import { View, Text, FlatList, TouchableOpacity,  Modal, Button } from 'react-native'
import Item from './Item'
import { Data } from './TravelScreen'
import {travel,filter, add, list} from './TravelStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function List({onPress}) {

    const [travel, setTravel] = useState(Data)

    const handleDelete = (travels) => {
        const newDataList =  travel.filter(item => item.id !== travels.id);
        setTravel(newDataList);
    }

    const RenderItem = ({item, onPress}) => (
        <View style={travel.listItem}>
            <Item 
                city={item.title} 
                onPress={onPress}
                onSwipeLeft={() =>
                    <View style={travel.deleteView}>
                        <TouchableOpacity onPress={()=>handleDelete(item)}>
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

    return(
        <View style={travel.listContainer}>
                <FlatList
                data={travel}
                keyExtractor={item => item.id}
                renderItem={({item})=> <RenderItem item={item} onPress={onPress}/>}
                ItemSeparatorComponent={() =>
                    <View style={list.separator}/>
                }
                />
        </View>
    )
}
