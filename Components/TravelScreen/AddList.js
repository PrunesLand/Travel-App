import React , {useState}from 'react'
import { View, Text, FlatList, TouchableOpacity,  Modal, Button } from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import AppTextInput from '../TextInput/AppTextInput'
import {filter, add} from './TravelStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Formik} from 'formik'
import { categories } from './TravelScreen'

export default function AddList() {
    const [modalVisible, setModalVisible] = useState(false);

    const RenderItem = ({label, onPress}) => (

        <View style={filter.itemContainer}>
            <TouchableOpacity onPress={onPress}>
                <Text style={filter.itemText}>{label}</Text>
            </TouchableOpacity>
        </View>
    )

    return(
    <View style={add.container}>

    <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={add.buttonContainer}>
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
                initialValues={{
                    id:'4',
                    title: '',
                    category:'',
                    date:'12/04/21',
                    location:'chatswood',
                    description:'eat sushi'
                }}
                onSubmit = {values => console.log(values)}
                style={add.modalContainer}
                >
                {({handleChange, handleSubmit}) =>(

                    <>
                    <View style={add.textInput}>
                        <Text style={add.textInputTitle}>Enter Title:</Text>
                        <AppTextInput
                        placeholder='title'
                        onChangeText = {handleChange('title')}
                        />
                    </View>
                    <View style={add.listContainer}> 
                        <Text style={add.listContainerText}>Select Category:</Text>
                        <FlatList
                        data={categories}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) =>
                        <RenderItem
                        label = {item.label}
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
