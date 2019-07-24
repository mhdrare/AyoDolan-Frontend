import React, { Component } from 'react';
import { 
    View, 
    Text ,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
    SafeAreaView,
    FlatList
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                category: 'Wisata Alam',
                title: "Sunrise in Gunung Bromo - Tur 1 Hari",
                jarak: '107 m dari Mount Bromo',
                review: '(734 review)',
                price: 'Rp 300.000',
                img: 'https://images.unsplash.com/photo-1540040496035-b3e1d8c127b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
            },
            {
                category: 'Wisata Alam',
                title: "Sunrise in Gunung Bromo - Tur 1 Hari",
                jarak: '107 m dari Mount Bromo',
                review: '(734 review)',
                price: 'Rp 300.000',
                img: 'https://images.unsplash.com/photo-1532518166026-5c82c8583b9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
            },
            {
                category: 'Wisata Alam',
                title: "Sunrise in Gunung Bromo - Tur 1 Hari",
                jarak: '107 m dari Mount Bromo',
                review: '(734 review)',
                price: 'Rp 300.000',
                img: 'https://images.unsplash.com/photo-1531500510780-9847487a9518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
            },
            {
                category: 'Wisata Alam',
                title: "Sunrise in Gunung Bromo - Tur 1 Hari",
                jarak: '107 m dari Mount Bromo',
                review: '8.4 (734 review)',
                price: 'Rp 300.000',
                img: 'https://images.unsplash.com/photo-1509421063299-06b684502b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
            }]
        }
    }
    listMain = ({ item }) =>(
        <TouchableOpacity style={{height:210,width:width*0.92,backgroundColor:'#fff', flexDirection:'row', alignSelf:'center', marginTop:5, marginBottom:5,borderRadius:5,elevation:3}}>  
            <View style={{flex:1}}>
                <Image source={{uri:item.img}} style={{height:'100%',width:'100%',borderTopLeftRadius:5,borderBottomLeftRadius:5}}/>
            </View>
            <View style={{flex:2,padding:10}}>
                <Text style={{color:'red'}}>{item.category}</Text>
                <Text style={{color:'#000',fontSize:14,fontWeight:'bold',marginTop:10}}>{item.title}</Text>
                <Text style={{color:'#444',marginTop:8}}>{item.jarak}</Text>
                <Text style={{color:'#393939',marginTop:8}}>{item.review}</Text>
                <Text style={{color:'red',fontSize:19,marginTop:25}}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    )
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Image source={require('../assets/back.png')} style={{ width:25,height:20 }} />
                    </TouchableOpacity>
                    <Text style={{fontSize:17,color:'#000',alignSelf:'center'}}>List Package</Text>    
                    <Text style={{fontSize:17,color:'#fff',alignSelf:'center'}}>.</Text>    
                    {/* <Image source={require('../assets/menu2.png')} style={{ width:23,height:23,borderRadius:10,marginLeft:8 }} /> */}
                </View>
                <View style={{paddingBottom:90}}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.listMain}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item,index)=>index.toString()}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor:'#f1f1f1',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:20,
        paddingVertical: 10,
        width,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
})