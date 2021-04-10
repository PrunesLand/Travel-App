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
        city: 'Surfing',
        category:'activity',
        title:'',
        description:''
    },
    {
        id:'2',
        city: 'Blue Mountains',
        category:'visit',
        title:'',
        description:''
    },
    {
        id:'3',
        city: 'Sushi',
        category:'food',
        title:'',
        description:''
    },
]

const category = [
    {
        label:'all',
        value: 1
    },
    {
        label: 'food',
        value:2
    },
    {
        label: 'visit',
        value:3
    },
    {
        label:'activity',
        value: 4
    }
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

const Filter = ({placeholder}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const RenderItem = ({label}) => (

        <View style={filter.itemContainer}>
            <TouchableOpacity onPress={console.log()}>
                <Text style={filter.itemText} onPress={()=>setModalVisible(false)}>{label}</Text>
            </TouchableOpacity>
        </View>
    )

    return(
        <View style={filter.container}>
            <TouchableHighlight onPress={() => setModalVisible(true)}>
                <View style={filter.wrapper}>
                    <Text>test</Text>
                    <MaterialCommunityIcons
                    name='chevron-down' 
                    size={24}
                    />
                </View>
            </TouchableHighlight>
            <Modal visible={modalVisible} animationType='slide'>
                <View style={account.background}>
                    <Button title='close' onPress={()=> setModalVisible(false)}/>
                    <FlatList
                        data={category}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) =>
                        <RenderItem
                        label = {item.label}
                        />
                    }
                    />
                </View>
            </Modal>
               
        </View>
    )
}

const List = ({onPress}) => {
    // const renderItem = ({item}) => (
        
    //         <View style={travel.renderItems}>
    //             <Item city={item.city} onPress={onPress}/>
    //         </View>
        
    // )
    return(
        <View style={travel.listContainer}>
                <FlatList
                data={Data}
                keyExtractor={item => item.id}
                renderItem={({item})=> <Item city={item.city} onPress={onPress}/>}
                />
        </View>
    )
}

const AddList = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return(
    <View style={filter.container}>

    <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={add.container}>
            <Text style={{color:'#fff'}}>Add</Text>
                <MaterialCommunityIcons
                    name='plus'
                    size={25}
                    color='#fff'
                    />
        </View>
    </TouchableOpacity>
        <Modal visible={modalVisible} animationType='slide'>
            <View style={account.background}>
                <Button title='close' onPress={()=> setModalVisible(false)}/>
                <AppTextInput placeholder='insert title'/>
                <TouchableOpacity onPress={()=> console.log()}>
                    <View>
                        <MaterialCommunityIcons
                        name='plus'
                        size={55}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    </View>
    )
}


const TravelScreen = ({navigation}) => {

    

    return (
        <View style={account.background}>
            <TravelHeader />
            <Filter/>
            <List onPress={()=> navigation.navigate('info')}/>
            <AddList/>
           
        </View>
    )
}

export default TravelScreen
