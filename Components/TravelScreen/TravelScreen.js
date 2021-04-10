import React , {useState}from 'react'
import { View, Text, FlatList, ImageBackground, TouchableOpacity, TouchableHighlight, Modal, Button } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import AppTextInput from '../TextInput/AppTextInput'
import {travel,filter, add} from './TravelStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Item from './Item'


const Data = [
    {
        id:'1',
        city: 'Sydney',
        title:'',
        description:''
    },
    {
        id:'2',
        city: 'Melbourne',
        title:'',
        description:''
    },
    {
        id:'3',
        city: 'Perth',
        title:'',
        description:''
    },
]

const TravelHeader = ({onPress}) => {
    return(
        <View style={travel.travelHeader}>
                
                {/* <TouchableHighlight onPress={onPress}>

                    <View style={travel.back} >
                        <MaterialCommunityIcons
                        name='chevron-left'
                        size={60}
                        color='#fff'
                        />
                    </View>
                </TouchableHighlight>
                
                <View style={travel.account}>
                    <MaterialCommunityIcons
                    name='account-circle'
                    size={45}
                    color='#fff'
                    />
                </View> */}
                <View style={travel.headerTextContainer}>
                    <Text style={travel.headerText}>Travels</Text>
                </View>
        
        </View>
    )
}

const Filter = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={filter.container}>
            <TouchableHighlight onPress={() => setModalVisible(true)}>
                <View style={filter.wrapper}>
                    <Text>categ</Text>
                    <MaterialCommunityIcons
                    name='chevron-down' 
                    size={24}
                    />
                </View>
            </TouchableHighlight>
            <Modal visible={modalVisible} animationType='slide'>
                <View style={account.background}>
                    <Button title='close' onPress={()=> setModalVisible(false)}/>
                </View>
            </Modal>
               
        </View>
    )
}

const List = () => {
    const renderItem = ({item, navigation}) => (
        <TouchableHighlight >
            <View style={travel.renderItems}>
                <Item city={item.city} onPress={()=>navigation.navigate('info')}/>
            </View>
        </TouchableHighlight>
    )
    return(
        <View style={travel.listContainer}>
                <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
        </View>
    )
}

const AddList = () => {
    return(
    <TouchableHighlight onPress={console.log()}>
        <View style={add.container}>
            <Text style={{color:'#fff'}}>Add</Text>
            <MaterialCommunityIcons
                name='plus'
                size={25}
                color='#fff'
                />
        </View>
    </TouchableHighlight>
    )
}


const TravelScreen = () => {

    

    return (
        <View style={account.background}>
            <TravelHeader />
            <Filter/>
            <List/>
            <AddList/>
           
        </View>
    )
}

export default TravelScreen
