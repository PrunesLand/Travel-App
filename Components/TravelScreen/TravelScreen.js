import React , {useState}from 'react'
import { View} from 'react-native'
import { account } from '../AccountScreen/AccountStyles'
import TravelHeader from './TravelHeader'
import Filter from './Filter'
import List from './List'
import AddList from './AddList'


export const Data = [
    {
        id:'1',
        title: 'Surfing',
        category:'activity',
        date:'10/04/21',
        location:'bondi',
        description:'surf at the beach'
    },
    {
        id:'2',
        title: 'Opera house',
        category:'visit',
        date:'11/04/21',
        location:'city',
        description:'take pictures of opera house'
    },
    {
        id:'3',
        title: 'Sushi',
        category:'food',
        date:'12/04/21',
        location:'chatswood',
        description:'eat sushi'
    },
]

export const categories = [
    {
        label:'Activity',
        value: 1
    },
    {
        label: 'Food',
        value:2
    },
    {
        label: 'Visit',
        value:3
    }
    
] 

const TravelScreen = ({navigation}) => {
    const [category, setCategory] = useState()

    return (
        <View style={account.background}>
            <TravelHeader />
            <Filter 
            placeholder='All'
            selectedItem = {category}
            onSelectedItem = {item => setCategory(item)}
            />
            <List 
            onPress={()=> navigation.navigate('info')}
            
            />
            <AddList/>
           
        </View>
    )
}

export default TravelScreen
