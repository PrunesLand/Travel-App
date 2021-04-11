import React , {useState}from 'react'
import { View, Text, FlatList, ImageBackground, TouchableOpacity, TouchableHighlight, Modal, Button } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import AppTextInput from '../TextInput/AppTextInput'
import {travel,filter, add} from './TravelStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Item from './Item'
import {Formik} from 'formik'

const Data = [
    {
        id:'1',
        title: 'Surfing',
        category:'activity',
        date:'',
        location:'',
        description:''
    },
    {
        id:'2',
        title: 'Opera house',
        category:'visit',
        date:'',
        location:'',
        description:''
    },
    {
        id:'3',
        title: 'Sushi',
        category:'food',
        date:'',
        location:'',
        description:''
    },
]

const categories = [
    {
        label:'activity',
        value: 1
    },
    {
        label: 'food',
        value:2
    },
    {
        label: 'visit',
        value:3
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

const Filter = ({placeholder, onSelectedItem, selectedItem}) => {
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
            <TouchableHighlight onPress={() => setModalVisible(true)}>
                <View style={filter.wrapper}>
                    <Text>{selectedItem? selectedItem.label: placeholder}</Text>
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

const List = ({onPress}) => {
    return(
        <View style={travel.listContainer}>
                <FlatList
                data={Data}
                keyExtractor={item => item.id}
                renderItem={({item})=> <Item city={item.title} onPress={onPress}/>}
                />
        </View>
    )
}

const AddList = () => {

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
               
                <Formik
                initialValues={{title:'', category:''}}
                onSubmit = {values => console.log(values)}

                >
                {({handleChange, handleSubmit}) =>(

                    <>
                    <AppTextInput
                    placeholder='title'
                    onChangeText = {handleChange('title')}
                    />
                    <FlatList
                    data={categories}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({item}) =>
                        <RenderItem
                        label = {item.label}
                        onPress={()=>{
                            setModalVisible(false);
                            
                        }}
                        />
                    }                    
                    />
                    <TouchableOpacity onPress={handleSubmit}>
                        <View>
                            <MaterialCommunityIcons
                            name='plus'
                            size={55}
                            />
                        </View>
                    </TouchableOpacity>
                    </>
                )}

                </Formik>

            </View>
        </Modal>
    </View>
    )
}


const TravelScreen = ({navigation}) => {
    const [category, setCategory] = useState()
    

    return (
        <View style={account.background}>
            <TravelHeader />
            <Filter 
            placeholder='all'
            selectedItem = {category}
            onSelectedItem = {item => setCategory(item)}
            />
            <List onPress={()=> navigation.navigate('info')}/>
            <AddList/>
           
        </View>
    )
}

export default TravelScreen
